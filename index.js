import fs from "fs";
import TurndownService from "turndown";
import data from "./data.json" assert { type: "json" };

const HTML_KEY = "quote";
const OUTPUT_DIR = "./dist";

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  const turndownService = new TurndownService();

  data.forEach(function (d) {
    const htmlString = d[HTML_KEY];
    const markdown = turndownService.turndown(htmlString);
  });
}

main();
