// const fs = require("fs");

const { resolve } = require("path");

// console.log(fs);

// const content1 = fs.readFileSync("readme.md");
// const content2 = fs.readFileSync("readme.md", { encoding: "utf-8", flag: "r" });

// console.log(content1);
// console.log(content2);

// const content3 = fs.readFile("./readme.md", "utf8", (err, result) => {
//   if (err) return new Error("파일을 일는 도중에 에러가 발생했습니다!");
//   console.log(result.trim());
// });

const fs = require("fs").promises;
fs.readFile("./readme.md", "utf8")
  .then((resolve) => {
    console.log(resolve.trim());
  })
  .catch((reject) => {
    console.error(reject);
  });
