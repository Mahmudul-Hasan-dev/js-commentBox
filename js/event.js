// //get coomment box post button by id
// document.getElementById('post').addEventListener('click', function () {
//     //get inner text value from comment box by id
//     const commentBox = document.getElementById('comment-box');
//     const comment = commentBox.value;
//     // console.log(comment);
//     //get comment field to show the comment by id
//     const commentField = document.getElementById('comment-display-field');
//     //set new comment to comment field
//     commentField.innerText = comment;

//     //set comment box empty
//     commentBox.value = ' ';
// })

///////////////////////
//another way by adding new element


//get coomment box post button by id
document.getElementById('post').addEventListener('click', function () {
    //get inner text value from comment box by id
    const commentBox2 = document.getElementById('comment-box');
    const comment2 = commentBox2.value;

    // console.log(comment);
    //get comment field to show the comment by id
    const commentField2 = document.getElementById('comment-container');

    //create element fro comment
    const p = document.createElement('p');
    p.innerText = comment2;

    //append comment to main comment section
    commentField2.appendChild(p);



    //set comment box empty
    commentBox2.value = ' ';
})