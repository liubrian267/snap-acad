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




// array of brawler objects
let brawlers = [
  {
    name : "Shelly",
    rarity: "Common",
    imageURL: "./images/shelly.png",
    weapon: "Shotgun",
  },
  {
    name : "Doug",
    rarity: "Mythic",
    imageURL: "./images/doug.png",
    weapon: "Sausage",
  },
  {
    name :"Piper",
    rarity: "Epic",
    imageURL: "./images/piper.png",
    weapon: "Umbrella Sniper",
  },
  {
    name : "Mandy",
    rarity: "Epic",
    imageURL: "./images/mandy.png",
    weapon: "Sugar Candy",
  },
  {
    name : "Spike",
    rarity: "Legendary",
    imageURL: "./images/spike.png",
    weapon: "Cactus Ball",
  }
]; 


// default brawlers in S tier
let tierS = [
  {
    name : "Bull",
    rarity: "Common",
    imageURL: "./images/bull.png",
    weapon: "Short Range Shotgun",
  },
  {
    name : "Jacky",
    rarity: "Rare",
    imageURL: "./images/jacky.png",
    weapon: "Jackhammer",
  },
  {
    name : "Edgar",
    rarity: "Epic",
    imageURL: "./images/edgar.png",
    weapon: "Fists",
  },
];

let tierA = [
  {
    name : "Chester",
    rarity: "Legendary",
    imageURL: "./images/chester.png",
    weapon: "Bells",
  },
  {
    name : "Janet",
    rarity: "Mythic",
    imageURL: "./images/janet.png",
    weapon: "Music Note Gun"
  },
  {
    name : "Byron",
    rarity: "Mythic",
    imageURL: "./images/byron.png",
    weapon: "Poison Darts",
  },
];

let tierB = [
  {
    name : "Carl",
    rarity: "Rare",
    imageURL: "./images/carl.png",
    weapon: "Pickaxe",
  },
  {
    name : "Rico",
    rarity: "Rare",
    imageURL: "./images/rico.png",
    weapon: "Bouncy Bullets",
  },
  {
    name : "Lumi",
    rarity: "Mythic",
    imageURL: "./images/lumi.png",
    weapon: "Dual Maces",
  },
]

// dictionary to map tiers to respective tier arrays
const tierMap = {
  S: tierS,
  A: tierA,
  B: tierB,
}

// dictionary to map rarity to numerical value for sorting
const rarityRanking = {
  "Legendary": 1,
  "Mythic": 2,
  "Epic": 3,
  "Rare": 4,
  "Common": 5,
}

// This function adds cards the page to display the data in the array
function showCards(brawlerData, id) {
  console.log("showCards called with brawlerData:", brawlerData);
  const cardContainer = document.getElementById(id);
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // iterate through array and map each brawler to a card
  for (let i = 0; i < brawlerData.length; i++) {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, brawlerData[i]); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, brawler) {
  card.style.display = "block";
  card.id = brawler.name;
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = brawler.name;

  const cardImage = card.querySelector("img");
  cardImage.src = brawler.imageURL;
  cardImage.alt = brawler.name + " Poster";
  
  const bulletPoints = card.querySelectorAll("ul li");

  bulletPoints[0].textContent = brawler.rarity;
  bulletPoints[1].textContent = brawler.weapon;
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", brawler.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards(tierS, "card-container-S");
  showCards(tierA, "card-container-A");
  showCards(tierB, "card-container-B");
  showCards(brawlers, "card-container-4");
});


function addBrawler() {
  // get the input values
  const tier = document.getElementById("tier").value;
  const name = document.getElementById("brawler-name").value;
  let brawler;

  // find the brawler in the "unused/not displayed" array of brawlers
  for (let i = 0; i < brawlers.length; i++) {
    if (brawlers[i].name === name) {
      brawler = brawlers[i];
      brawlers.splice(i, 1); // remove the brawler from the array
      break;
    }
  }

  // if brawler is found and valid tier is input, add it to the correct tier container
  if (brawler && tierMap[tier]) {
    tierMap[tier].push(brawler); // add the brawler to the tier array
    console.log("Adding brawler:", brawler.name, "to tier:", tier);
    const templateCard = document.querySelector(".card");
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, brawler);
    const cardContainer = document.getElementById("card-container-"+tier);
    cardContainer.appendChild(nextCard); // Add new card to the container
    showCards(brawlers, "card-container-4");
  }
}

function removeBrawler() {
  // get input values and find the respective container, and delete the card with the matching id to name
  const tier = document.getElementById("tier").value;
  const name = document.getElementById("brawler-name").value;

  // if valid tier is passed in, look for the brawler in the card container to be removed
  if (tierMap[tier]) {
    // remove the brawler from the array, move back to unused array
    for (let i = 0; i < tierMap[tier].length; i++) {
      if (tierMap[tier][i].name === name) {
        brawlers.push(tierMap[tier][i])
        tierMap[tier].splice(i, 1); 
        break;
      }
    }
    showCards(tierMap[tier], "card-container-"+tier);
    showCards(brawlers, "card-container-4");
  }

  
}

function sortByRarity() { 
  console.log('clicked');
  const tier = document.getElementById("tier").value; 
  
  
  tierMap[tier].sort((a, b) => { 
    // Compare rarity first, if tie sort by name
    if (a.rarity !== b.rarity) { 
      return rarityRanking[a.rarity] - rarityRanking[b.rarity]; 
    } else { 
      return a.name.localeCompare(b.name); 
    }
  }); 
  
  console.log(tier, tierMap[tier]); 
  showCards(tierMap[tier], "card-container-"+tier); 
}

function showByRarity() {
  const rarity = document.getElementById("rarity").value;
  // Filter the available brawlers in each tier by the input rarity, filter iterates through the array and returns matching elements
  const filteredBrawlers = brawlers.filter(brawler => brawler.rarity === rarity);
  showCards(filteredBrawlers, "card-container-4");

  const filteredTierS = tierS.filter(brawler => brawler.rarity === rarity);
  showCards(filteredTierS, "card-container-S");
  
  const filteredTierA = tierA.filter(brawler => brawler.rarity === rarity);
  showCards(filteredTierA, "card-container-A");

  const filteredTierB = tierB.filter(brawler => brawler.rarity === rarity);
  showCards(filteredTierB, "card-container-B");
}