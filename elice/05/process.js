const process = require("process");

console.log(process.env.PORT || 3000);
console.log(process.env);

console.log(process.env.AWS_KEY);
console.log(process.env.SECRET_KEY);

console.log(process.version);
console.log(process.pid);
console.log(process.execPath);
console.log(process.execArgv);

console.log(process.uptime());
console.log(process.cwd());
