/*// firstly requiring the fs (file system)
const fs = require("fs");

// readfilesync used for read the file synchronous way
const textIn = fs.readFileSync("input.txt", "utf-8");

// writefilesync used for write the file
fs.writeFileSync("output.txt", `written file is :- ${textIn}`);
console.log("file written !");*/

/// now its turn to write code in asynchronus way
const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, data1) => {
  fs.readFile("output.txt", "utf-8", (err, data2) => {
    fs.writeFile("append.txt", `${data1}\n ${data2}`, "utf-8", (err) => {
      console.log("file is written !");
    });
  });
});
console.log("code running......");
