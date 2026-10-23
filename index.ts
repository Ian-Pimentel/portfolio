import data from "./portfolio.json";

const testEl = document.getElementById("test");
if (testEl !== null) {
    testEl.textContent = JSON.stringify(data, null, 4)
}