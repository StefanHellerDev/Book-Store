function init() {
  let bookstore = document.getElementById("bookstoreMain");
  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    let bookPrice = books[bookIndex].price.toFixed(2);
    bookPrice = bookPrice.replace(".", ",");
    bookPrice = bookPrice + " €";

    bookTemplate(bookstore, bookIndex, bookPrice);
  }
}

function filledHeart(bookIndex) {
  document
    .getElementById("heart" + bookIndex)
    .setAttribute("src", "./assets/icons/heart_filled.png");
  return;
}

function unfilledHeart(bookIndex) {
  document
    .getElementById("heart" + bookIndex)
    .setAttribute("src", "./assets/icons/heart_unfilled.png");
  return;
}

function toggleHeart(bookIndex) {
  if (books[bookIndex].liked == true) {
    unfilledHeart(bookIndex);
    books[bookIndex].liked = false;
    books[bookIndex].likes = books[bookIndex].likes - 1;
  } else {
    filledHeart(bookIndex);
    books[bookIndex].liked = true;
    books[bookIndex].likes = books[bookIndex].likes + 1;
  }
  document.getElementById("bookLikes" + bookIndex).innerHTML =
    books[bookIndex].likes;
}

function addComment(bookIndex) {
  let commentInputRef = document.getElementById("commentInput" + bookIndex);
  let commentInput = commentInputRef.value;
  
  if (commentInput == "") {
    return;
  }

  books[bookIndex].comments.unshift({
    "name": "Gast",
    "comment": commentInput,
  });

  commentsTemplate(bookIndex);
  
  commentInputRef.value = "";
}
