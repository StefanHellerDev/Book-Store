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
              <input id="commentInput${bookIndex}" type="text" placeholder="Bitte Kommentar eingeben...">
              <img src="./assets/icons/115704_paperplane_paper plane_icon.png" alt="paper plane"  onclick="addComment(${bookIndex})">
            </div>
          </div>`;
}

function commentsTemplate(comments, bookIndex, commentsIndex) {
  comments.innerHTML += `
      <tr>
        <td>[${books[bookIndex].comments[commentsIndex].name}]</td>
        <td>:</td>
        <td>${books[bookIndex].comments[commentsIndex].comment}</td>
      </tr>`;
}
