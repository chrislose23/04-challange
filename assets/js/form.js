document.getElementById('myBlog').addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let title = document.getElementById('blogTitle').value;
    let content = document.getElementById('content').value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('blogTitle', title);
    localStorage.setItem('content', content);
    window.location.href='blog.html';

});
