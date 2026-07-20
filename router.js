import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const topnav = document.getElementById('topnav');
topnav.addEventListener('click', linkClick);

async function loadPage(targetPage) {
    const path = "pages/" + targetPage + ".md";
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error("Target file couldn't be found.");
        }
        const markdown = await response.text();
        document.getElementById("app").innerHTML = marked.parse(markdown);
    } catch {
        document.getElementById("app").innerHTML = "<h1>Page not found</h1>";
    }
}

async function linkClick(event) {
    if (event.target.tagName !== "A") {
        return;
    }

    event.preventDefault();
    const targetPage = event.target.dataset.page;
    console.log(targetPage);

    loadPage(targetPage);
}

loadPage('home');