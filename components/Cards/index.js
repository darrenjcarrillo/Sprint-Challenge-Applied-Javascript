// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Cards(object) {
  // Create element
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const imgInDiv = document.createElement("img");
  const span = document.createElement("span");

  // Class

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  // Content
  headlineDiv.textContent = object.headline;
  imgInDiv.src = object.authorPhoto;
  span.textContent = object.authorName;

  // Append
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(span);
  imgDiv.appendChild(imgInDiv);

  return cardDiv;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles["javascript"].forEach(item => {
      const articleCard = Cards(item);
      articleCards.appendChild(articleCard);
    });
    response.data.articles["bootstrap"].forEach(item => {
      const articleCard = Cards(item);
      articleCards.appendChild(articleCard);
    });
    response.data.articles["technology"].forEach(item => {
      const articleCard = Cards(item);
      articleCards.appendChild(articleCard);
    });
    response.data.articles["jquery"].forEach(item => {
      const articleCard = Cards(item);
      articleCards.appendChild(articleCard);
    });
    response.data.articles["node"].forEach(item => {
      const articleCard = Cards(item);
      articleCards.appendChild(articleCard);
    });
  });

const articleCards = document.querySelector(".cards-container");
