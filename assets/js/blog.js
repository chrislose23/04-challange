$('#back-button').click(function() {
    window.location='index.html';
});

let userName = localStorage.getItem('userName');
let title = localStorage.getItem('blogTitle');
let content = localStorage.getItem('content');

if (userName && title && content) {
    let blogContentData = document.getElementById('blogContent');
    blogContentData.innerHTML = "<p>Username: " + userName + "</p><p>Title: " + title + "</p><p>Content: " + content + "</p>";
} else {
    let blogContentData = document.getElementById('blogContent');
    blogContentData.innerHTML = "<p>No Blog Entries Logged</p>";
}