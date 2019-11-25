import $ from 'jquery';
import setPage from './page.js';
import showPosts from './posts.js';

export default function showBlogList() {
    function createBlogEntry(blog) {
        return $(`<div class="blog">
                    <div class="title">${blog.name}</div>
                    <div class="website">${blog.website}</div>
                    <div class="company">
                        <div>${blog.company.name}</div>
                        <div>${blog.company.catchPhrase}</div>
                        <div>${blog.company.bs}</div>
                    </div>
                  </div>`)
            .click(() => {
                showPosts(blog);
            });
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load blog list');
            }
            return response.json();
        })
        .then(blogs => {
            const blogElements = [];

            // console.log(blogs);
            blogs.forEach(blog => {
                blogElements.push(createBlogEntry(blog));
            });

            setPage({
                title: 'Blog List',
                content: blogElements
            });
        })
        .catch(err => console.error(err));
}