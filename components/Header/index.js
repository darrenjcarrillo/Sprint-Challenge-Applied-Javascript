// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

function Header() {
  // Create Element
  const newHeader = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerH1 = document.createElement("h1");
  const headerTemp = document.createElement("span");

  // Class
  newHeader.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");

  // Append
  newHeader.appendChild(headerDate);
  newHeader.appendChild(headerH1);
  newHeader.appendChild(headerTemp);

  // Content
  headerDate.textContent = "March 28, 2019";
  headerH1.textContent = "Lambda Times";
  headerTemp.textContent = "98°";

  return newHeader;
}

let thisHeader = Header();

headerContainer.appendChild(thisHeader);
