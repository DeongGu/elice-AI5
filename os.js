const os = require("os");

// console.log(os);
console.log(`The System Uptime is ${os.uptime}`);
console.log(os.cpus()[0]);

const currentOS = {
  name: os.type(),
  release: os.release(),
  cpus: os.cpus(),
  core_cnt: os.cpus(),
};

console.log(currentOS.name);
