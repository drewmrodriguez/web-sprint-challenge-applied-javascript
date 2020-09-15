// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerContainer = document.createElement("div");

    headerContainer.classList.add("header");

    const headerDate = document.createElement("span");
    const headerTitle = document.createElement("h1");
    const headerTemp = document.createElement("span");

    headerDate.classList.add("date");
    headerTemp.classList.add("temp");

    headerDate.textContent = "SEPTEMBER 12, 2020";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "100°";

    const headerElements = [headerDate, headerTitle, headerTemp];

        headerElements.forEach((element) => {
        headerContainer.appendChild(element);
        });

  return headerContainer;
}

const headerElement = document.querySelector("div.header-container");
const newHeader = Header();

headerElement.appendChild(newHeader);
