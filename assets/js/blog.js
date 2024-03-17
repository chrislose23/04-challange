$('#back-button').click(function() {
    window.location='index.html';
});
let blogContentData = document.getElementById('blogContent');

let allBlogs = JSON.parse(localStorage.getItem('blogData'));

if (allBlogs && allBlogs.length > 0) {
    allBlogs.forEach(function(entry) {
        blogContentData.innerHTML += "<p>Username: " + entry.userName + "</p><p>Title: " + entry.title + "</p><p>Content: " + entry.content + "</p>";
    })
} else {
    blogContentData.innerHTML = "<p>No Blog Entries Logged</p>";
}
