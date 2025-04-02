function init() {
  let bookstore = document.getElementById("bookstoreMain");
  for (let i = 0; i < books.length; i++) {
    bookTemplate(bookstore, i);
  }
}

function filledHeart() {
  document
    .getElementById("heart")
    .setAttribute("src", "./assets/icons/heart_filled.png");
  return;
}

function unfilledHeart() {
  document
    .getElementById("heart")
    .setAttribute("src", "./assets/icons/heart_unfilled.png");
  return;
}

function bookTemplate(bookstore, i) {
  bookstore.innerHTML += `<div>
    <img class="grow" src="./img/${imagesSmall[i]}.jpg" onclick="switchOnOverlay(${i})">
    </div>`;
}

