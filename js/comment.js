// const COMMENTS_COUNT_SHOW = 5;

// const bigPictureElement = document.querySelector('.big-picture');
// const commentElement = document
//   .querySelector('#comment')
//   .textContent.querySelector('.social__comment');
// const commentsListElement = bigPictureElement.querySelector('.social__comments');
// const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
// // const totalCommentCountElement = bigPictureElement.querySelector('.social__comment-total-count')
// const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');

// // let commentsCountShown = 0;
// // let comments = [];

// const createComment = function ({ avatar, message, name }) {
//   const newComment = commentElement.cloneNode(true);

//   newComment.querySelector('.social__picture').src = avatar;
//   newComment.querySelector('.social__picture').alt = name;
//   newComment.querySelector('.social__text').textContent = message;

//   return newComment;
// };

// const renderComments = (comments) => {
//   commentsCountShown += COMMENTS_COUNT_SHOW;

//   // if (commentsCountShown)

//   commentsListElement.innerHTML = '';
//   const fragment = document.createDocumentFragment();

//   comments.forEach((item) => {
//     const comment = createComment(item);
//     fragment.append(comment);
//   });
//   commentsListElement.append(fragment);
// };

// const initCommentList = function () {
//   commentCountElement.classList.add('hidden');
//   commentsLoaderElement.classList.add('hidden');
// };

// export { renderComments, initCommentList };
