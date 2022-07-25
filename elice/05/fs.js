const fs = require("fs");

// console.log(fs);

const content1 = fs.readFileSync("readme.md");
const content2 = fs.readFileSync("readme.md", { encoding: "utf-8", flag: "r" });

console.log(content1);
console.log(content2);
