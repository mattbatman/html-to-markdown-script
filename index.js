import fs from "fs";
import TurndownService from "turndown";
import data from "./data.json" assert { type: "json" };

const OUTPUT_DIR = "./dist";

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  const turndownService = new TurndownService();

  data.forEach(function ({ id, quotee, quote, platform, link }) {
    const htmlString = quote;
    const markdown = turndownService.turndown(htmlString);
    const file = getFileName({ id, quotee });
    const fileData = getFileData({ markdown, id, quotee, platform, link });

    fs.writeFile(file, fileData, function (error) {
      if (error) {
        console.log(error);
      }
    });
  });
}

function getFileName({ id, quotee }) {
  return `${OUTPUT_DIR}/${id}-${quotee}.md`;
}

function getFileData({ markdown, id, quotee, platform, link }) {
  return `---
id: ${id}
quotee: "${quotee}"
platform: "${platform}"
link: "${link}"
---

${markdown}
`;
}

main();
