//get coomment box post button by id
document.getElementById('post').addEventListener('click', function () {
    //get inner text value from comment box by id
    const commentBox = document.getElementById('comment-box');
    const comment = commentBox.value;
    // console.log(comment);
    //get comment field to show the comment by id
    const commentField = document.getElementById('comment-display-field');
    //set new comment to comment field
    commentField.innerText = comment;

    //set comment box empty
    commentBox.value = ' ';
})