document.getElementById('post').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const comment = commentBox.value;
    // console.log(comment);
    const commentField = document.getElementById('comment-display-field');
    commentField.innerText = comment;
    commentBox.value = ' ';
})