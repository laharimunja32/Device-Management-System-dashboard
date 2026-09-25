const fs = require("fs");
const buf = fs.readFileSync("gh-bundle.js");
for (const enc of ["utf16le", "utf8"]) {
  const b = buf.toString(enc);
  console.log(enc, {
    welcome: b.includes("Welcome Back"),
    loginPage: b.includes("login-page"),
    empty107: b.includes("107(){}"),
    render: b.match(/render\([^)]{0,120}\)/)?.[0],
  });
}
