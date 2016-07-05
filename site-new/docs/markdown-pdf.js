var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

fs.createReadStream("adding-synchronization.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("tmp/adding-synchronization.pdf"));