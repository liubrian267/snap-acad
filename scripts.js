/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

const brawlers = [
  {
    name : "Shelly",
    rarity: "Common",
    imageURL: "/images/shelly.png",
  },
  {
    name : "Carl",
    rarity: "Rare",
    imageURL: "/images/carl.png",
  },
  {
    name : "Rico",
    rarity: "Rare",
    imageURL: "/images/rico.png",
  },
  {
    name : "Lumi",
    rarity: "Mythic",
    imageURL: "/images/lumi.png",
  },
  {
    name : "Chester",
    rarity: "Legendary",
    imageURL: "/images/chester.png",
  },
  {
    name : "Janet",
    rarity: "Mythic",
    imageURL: "/images/janet.png",
  },
  {
    name : "Byron",
    rarity: "Mythic",
    imageURL: "/images/byron.png",
  },
  // {
  //   name : "Larry and Laurie",
  //   rarity: "Common",
  //   imageURL: "/images/larryandlawrie.png",
  // },
  {
    name : "Bull",
    rarity: "Common",
    imageURL: "/images/bull.png",
  },
  {
    name : "Jacky",
    rarity: "Rare",
    imageURL: "/images/jacky.png",
  },
  {
    name : "Edgar",
    rarity: "Epic",
    imageURL: "/images/edgar.png",
  },
]; // array of brawler objects

// This function adds cards the page to display the data in the array
function showCards(brawlerData, id) {
  console.log("showCards called with brawlerData:", brawlerData);
  const cardContainer = document.getElementById(id);
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < brawlerData.length; i++) {
    //let title = brawlerData[i].name;

    // const bulletPoints = cardContent.querySelectorAll("ul li");
    // bulletPoints[0].textContent = brawlerData[i].name;
    // bulletPoints[1].textContent = brawlerData[i].rarity;

    
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, brawlerData[i]); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, brawler) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = brawler.name;

  const cardImage = card.querySelector("img");
  cardImage.src = brawler.imageURL;
  cardImage.alt = brawler.name + " Poster";
  
  const bulletPoints = card.querySelectorAll("ul li");
  bulletPoints[0].textContent = brawler.name;
  bulletPoints[1].textContent = brawler.rarity;
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", brawler.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards(brawlers, "card-container-1");
  showCards(brawlers, "card-container-2");
  showCards(brawlers, "card-container-3");
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
