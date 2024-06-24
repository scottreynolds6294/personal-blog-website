document.getElementById('blog-post').addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (username === '' || title === '' || content === '') {
        alert("Please complete all fields.");
        return;
    }

    const blogInfo = {
        username: username,
        title: title,
        content: content
    };

localStorage.setItem("blogInfo", JSON.stringify(blogInfo));
window.location.href = "blog.html"

document.getElementById('blog-post').reset();
});





