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

function bookTemplate(bookstore, bookIndex, bookPrice) {
  bookstore.innerHTML += `
        <div class="bookCard">
          <div class="bookCardTitle">${books[bookIndex].name}</div>
          <div class="bookCardPic">
            <img class="bookCardIcon" src="./assets/icons/cardBook.png" alt="Placeholder book">
          </div>
          <div class="priceLikesContainer">
            <div class="bookPrice">${bookPrice}</div>
            <div class="d_flex ai_center">
              <p id="bookLikes${bookIndex}">${books[bookIndex].likes}</p>
              <img id="heart${bookIndex}" src="" onclick="toggleHeart(${bookIndex})">
            </div>
          </div>
          <div class="authorYearGenreContainer">
            <table>
              <tr>
                <td>Autor </td>
                <td> : </td>
                <td> ${books[bookIndex].author}</td>
              </tr>
              <tr>
                <td>Erscheinungsjahr </td>
                <td> : </td>
                <td> ${books[bookIndex].publishedYear}</td>
              </tr>
              <tr>
                <td>Genre </td>
                <td> : </td>
                <td> ${books[bookIndex].genre}</td>
              </tr>
            </table>
          </div>
          <div class="commentSection">
            <p>Kommentare:</p>
            <div class="comments">
              <table id="bookComments${bookIndex}"></table>
            </div>
          </div>
        </div>`;

  if (books[bookIndex].liked == true) {
    filledHeart(bookIndex);
  } else {
    unfilledHeart(bookIndex);
  }
  commentsTemplate(bookIndex);
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

function commentsTemplate(bookIndex) {
  let comments = document.getElementById("bookComments" + bookIndex);

  for (
    let commentsIndex = 0;
    commentsIndex < books[bookIndex].comments.length;
    commentsIndex++
  ) {
    comments.innerHTML += `
    <tr>
      <td>[${books[bookIndex].comments[commentsIndex].name}]</td>
      <td>:</td>
      <td>${books[bookIndex].comments[commentsIndex].comment}</td>
    </tr>`;
  }
}
