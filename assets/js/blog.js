const backButton = document.querySelector('#back-button');
  
backButton.addEventListener('click', function() {
  window.history.back();
});

function renderBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPostsList = document.querySelector('.blog-posts-list');
    blogPostsList.innerHTML = ''; // Clear previous content (if any)

    if (blogPosts.length === 0) {
        blogPostsList.innerHTML = '<p>No blog posts found.</p>';
        return;
    }

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const usernameElement = document.createElement('h3');
        usernameElement.textContent = `Username: ${post.username}`;

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(usernameElement);
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogPostsList.appendChild(postElement);
    });
}

renderBlogPosts();
