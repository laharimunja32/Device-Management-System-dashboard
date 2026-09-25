const fs = require("fs");
const vm = require("vm");
const { JSDOM } = require("jsdom");

const bundlePath = process.argv[2];
if (!bundlePath) {
    console.error("Usage: node test-one-bundle.js <path-to-bundle.js>");
    process.exit(1);
}

const dom = new JSDOM(
    '<!DOCTYPE html><html><body><div id="root"></div></body></html>',
    { url: "http://localhost/Device-Management-System-dashboard/" }
);

const { window } = dom;
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.HTMLElement = window.HTMLElement;
global.Node = window.Node;
global.MutationObserver = window.MutationObserver;

let pageError;
window.addEventListener("error", (e) => {
    pageError = e.error?.message || e.message;
});

try {
    vm.runInThisContext(fs.readFileSync(bundlePath, "utf8"), {
        filename: "bundle.js"
    });
} catch (e) {
    console.log("sync error:", e.message);
}

setTimeout(() => {
    const root = document.getElementById("root");
    console.log("pageError:", pageError || "(none)");
    console.log("root children:", root?.childElementCount ?? 0);
}, 500);
