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

        const titleElement = document.createElement('h5');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const usernameElement = document.createElement('h4');
        usernameElement.textContent = `Posted by: ${post.username}`;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(usernameElement);

        blogPostsList.appendChild(postElement);
    });
}

renderBlogPosts();
