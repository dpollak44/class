import $ from 'jquery';
import setPage from './page.js';

export default function showPosts(blog) {
    let posts;
    let postIndex = 0;
    let postsElem;
    let prevButton;
    let nextButton;
    const numPostsToShow = 3;

    function createPostEntry(post) {
        const postEntry = $(`<div class="post">
                    <div class="title">${post.title} [${post.id}]</div>
                    <div class="body">${post.body}</div>
                    <button id="commentsButton">show comments</button>
                    <div id="comments"></div>
                  </div>`);
        const commentsDiv = postEntry.find('#comments');
        let comments;

        function showComments() {
            function createCommentEntry(comment) {
                return $(`<div class="comment">
                            <div>${comment.body}</div>
                            <div class="author"><span class="name">${comment.name}</span> ${comment.email}</div>
                          </div>`);
            }

            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to load comments for post ${post.id}`);
                    }
                    return response.json();
                })
                .then(commentList => {
                    comments = commentList;

                    // console.log(comments);
                    comments.forEach(comment => {
                        commentsDiv.append(createCommentEntry(comment));
                    });
                })
                .catch(err => console.error(err));
        }

        let commentsShowing = false;
        const commentsButton = postEntry.find('#commentsButton').click(() => {
            if (!commentsShowing) {
                if (!comments) {
                    showComments(post);
                }
                commentsDiv.slideDown();
                commentsShowing = true;
                commentsButton.text('Hide Comments');
            } else {
                commentsDiv.slideUp();
                commentsShowing = false;
                commentsButton.text('Show Comments');
            }
        });

        return postEntry;
    }

    function updatePosts() {
        if (postIndex === 0) {
            prevButton.prop('disabled', true);
        } else {
            prevButton.prop('disabled', false);
        }

        if (postIndex >= posts.length - numPostsToShow) {
            nextButton.prop('disabled', true);
        } else {
            nextButton.prop('disabled', false);
        }

        postsElem.empty();
        for (let i = postIndex; i < postIndex + numPostsToShow && i < posts.length; i++) {
            postsElem.append(createPostEntry(posts[i]));
        }
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load posts for ${blog.id}`);
            }
            return response.json();
        })
        .then(postList => {
            posts = postList;
            //const content = [];

            // console.log(posts);
            /*posts.forEach(post => {
                content.push(createPostEntry(post));
            });*/
            const contentElem = $(`<div>
                                        <div id="posts"></div>
                                        <div>
                                            <button id="prev">prev</button>
                                            <button id="next">next</button>
                                        </div>
                                    </div>`);

            postsElem = contentElem.find('#posts');

            prevButton = contentElem.find('#prev').click(() => {
                postIndex -= numPostsToShow;
                updatePosts();
            });
            nextButton = contentElem.find('#next').click(() => {
                postIndex += numPostsToShow;
                updatePosts();
            });

            updatePosts();

            setPage({
                title: `${blog.name}'s Blog`,
                content: contentElem
            });
        })
        .catch(err => console.error(err));
}
