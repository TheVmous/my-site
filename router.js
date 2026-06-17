//TODO: create separate .html pages for each tab and separate .js views too
const pageDict = {
    home: "<h1>Home</h1><p>Welcome to Ved's site</p>",
    blog: "<h1>Blog</h1><p>Incoherent ramblings to be added...</p>",
    feedback: "<h1>Feedback</h1><p>Compliments? Complaints? Look no further</p>"
}
const topnav = document.getElementById('topnav');
topnav.addEventListener('click', linkClick);

function linkClick(event) {
    if (event.target.tagName !== "A") {
        return;
    }

    event.preventDefault();
    const targetPage = event.target.dataset.page;
    console.log(targetPage);

    if (pageDict[targetPage] != 'undefined') {
        const pageContent = pageDict[targetPage];
        document.getElementById('app').innerHTML = pageContent;
    } else {
        console.log("undefined page");
        return;
    }

    
}