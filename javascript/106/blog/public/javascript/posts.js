/*global $, io*/
(function () {
  'use strict';

  const socketIo = io();

  const addCommentUi = $('#addComment');
  const commentContent = $('#comment_content');
  let activeAddCommentButton;

  $('.addComment').click(e => {
    if (activeAddCommentButton) {
      activeAddCommentButton.show();
    }
    activeAddCommentButton = $(e.target).after(addCommentUi.show()).hide();
  });

  function endCommenting() {
    activeAddCommentButton.show();
    addCommentUi.hide();
    commentContent.val('');
  }

  $('#add').click(async e => {
    const newComment = {
      content: commentContent.val()
    };

    const postId = $(e.target).closest('.post').attr('id');

    try {
      const response = await fetch(`/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newComment)
      });

      if (response.ok) {
        endCommenting();
      } else {
        console.error(response.statusText);
      }
    } catch (e) {
      console.error(e);
    }
  });

  $('#cancel').click(() => {
    endCommenting();
  });

  socketIo.on('comment', newCommentData => {
    const newComment = newCommentData.comment;
    /*$(`#${newCommentData.postId} .comments`).append(`
      <h3>${newComment.content}</h3>
      <h4>by ${newComment.author} on ${newComment.date.toLocaleString()}</h4>
    `);*/
    $(`#${newCommentData.postId} .comments`).append(newCommentData.comment);
  });
}());