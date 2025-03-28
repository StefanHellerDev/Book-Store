function init() {
  let bookstore = document.getElementById("bookstoreMain");
  for (let i = 0; i < books.length; i++) {
    bookTemplate(bookstore, i);
  }
}

console.table(books);

function bookTemplate(bookstore, i) {
  bookstore.innerHTML += `<div>
    <img class="grow" src="./img/${imagesSmall[i]}.jpg" onclick="switchOnOverlay(${i})">
    </div>`;
}
