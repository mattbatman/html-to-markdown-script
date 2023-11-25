# HTML to Markdown Script

This was written specifically for my project [Nootropic Cat Treats](https://github.com/mattbatman/nootropic-cat-treats) to convert a single JSON file with HTML mark-up to a folder containing markdown files, one for each element in the original JSON file.

## Getting Started

This was built with Node version `18.15.0`.

```
# install the dependency of turndown
npm install
```

Add a JSON file of input data as `data.json`.

```
# run
npm run start
```

## More on How it Works

Nootropic Cat Treats originally pulled down a Google Sheet of quotes via the Google Sheets API and wrote that to a single JSON file as input data. I wanted to convert the site to use markdown files instead -- each markdown file would consist of one quote. The original JSON included a `quote` property with HTML mark-up.

An example was:
```
[
  {
    "id": "1",
    "quote": "<p>\nAnyway, I’m sorry. I know I haven’t been my best this past decade.\n</p>",
    "quotee": "Steve Zissou",
    "platform": "The Life Aquatic with Steve Zissou",
    "link": "https://www.amazon.com/Life-Aquatic-Steve-Zissou/dp/B006C0AT9O/ref=sr_1_1?ie=UTF8&qid=1493640677&sr=8-1&keywords=a+life+aquatic",
    "length": "short"
  }
]
```

The above quote was output as a file called `1-Steve Zissou.md` with the content:
```
---
id: 1
quotee: "Steve Zissou"
platform: "The Life Aquatic with Steve Zissou"
link: "https://www.amazon.com/Life-Aquatic-Steve-Zissou/dp/B006C0AT9O/ref=sr_1_1?ie=UTF8&qid=1493640677&sr=8-1&keywords=a+life+aquatic"
---

Anyway, I’m sorry. I know I haven’t been my best this past decade.

```