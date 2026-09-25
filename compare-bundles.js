const fs = require("fs");

function check(file, enc) {
  const b = fs.readFileSync(file, enc || "utf8");
  console.log(file, {
    empty107: b.includes("107(){}"),
    welcome: b.includes("Welcome Back"),
    render: b.match(/getElementById\("root"\)\)[^;]+/)?.[0],
  });
}

check("dist/bundle.js");
check("gh-bundle.js", "utf16le");
