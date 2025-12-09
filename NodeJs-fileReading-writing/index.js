// firstly requiring the fs (file system)
const fs = require("fs");

// readfilesync used for read the file synchronous way
const textIn = fs.readFileSync("input.txt", "utf-8");

// writefilesync used for write the file
fs.writeFileSync("output.txt", `written file is :- ${textIn}`);
console.log("file written !");
