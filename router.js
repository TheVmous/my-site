//TODO: create separate .html pages for each tab and separate .js views too
/*
const pageDict = {
    home: "<h1>Home</h1><p>Welcome to Ved's site</p>",
    blog: "<h1>Blog</h1><p>Incoherent ramblings to be added...</p>",
    feedback: "<h1>Feedback</h1><p>Compliments? Complaints? Look no further</p>"
}
*/
const topnav = document.getElementById('topnav');
topnav.addEventListener('click', linkClick);

async function loadPage(targetPage) {
    const path = "pages/" + targetPage + ".txt";
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error("Target file couldn't be found.");
        }

        document.getElementById("app").innerHTML = await response.text();
    } catch {
        //loadPage("err.txt");
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