
link = document.getElementById('blog-link');
link.addEventListener('click', linkClick);

function linkClick(event) {
    document.getElementById('tmp-output').innerText += "clicked";
    event.preventDefault();
}