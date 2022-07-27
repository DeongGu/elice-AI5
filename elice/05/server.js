const url = require("url");

console.log(url);

const myURL = new URL(
  "https://docs.google.com/spreadsheets/d/1-Yrw1IGna2hO9rY5KjEeNZgzWo9_yQNHf2g91s3zE0M/edit#gid=1850287212"
);

console.log(myURL);
console.log(myURL.origin);

const myURLparse = url.parse(
  "https://docs.google.com/spreadsheets/d/1-Yrw1IGna2hO9rY5KjEeNZgzWo9_yQNHf2g91s3zE0M/edit#gid=1850287212"
);
console.log(myURLparse);
