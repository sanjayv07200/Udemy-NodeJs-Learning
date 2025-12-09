const fs = require("fs");
const textIn = fs.readFileSync("input.txt", "utf-8");

fs.writeFileSync("output.txt", `written file is :- ${textIn}`);
console.log("file written !");
