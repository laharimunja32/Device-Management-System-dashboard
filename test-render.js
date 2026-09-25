const fs = require("fs");
const { JSDOM } = require("jsdom");

function testBundle(file, label) {
  const dom = new JSDOM(
    '<!DOCTYPE html><html><body><div id="root"></div></body></html>',
    {
      url: "http://localhost/Device-Management-System-dashboard/",
      runScripts: "dangerously",
      resources: "usable",
    }
  );
  const { window } = dom;
  let err;
  window.addEventListener("error", (e) => {
    err = e.error || e.message;
  });
  const code = fs.readFileSync(
    file,
    file.endsWith("gh-bundle.js") ? "utf16le" : "utf8"
  );
  window.eval(code);
  return new Promise((resolve) => {
    setTimeout(() => {
      const root = window.document.getElementById("root");
      resolve({
        label,
        error: err ? String(err) : null,
        rootHtml: root.innerHTML.slice(0, 120),
        hasWelcome: root.textContent.includes("Welcome Back"),
      });
    }, 100);
  });
}

(async () => {
  console.log(await testBundle("dist/bundle.js", "dist"));
  console.log(await testBundle("gh-bundle.js", "gh-bundle"));
})();

