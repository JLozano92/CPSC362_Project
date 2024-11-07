const startPage = document.getElementById("start-page");
const gameInterface = document.getElementById("game-interface");
const cardsContainer = document.getElementById("cards-container");
const singlePlayerBtn = document.getElementById("single-player-btn");
const multiplayerBtn = document.getElementById("multiplayer-btn");
const chosenCardDisplay = document.getElementById("chosen-card");
const chosenCardHeader = document.getElementById("chosen-card-header");

// Function to show the game interface and hide the start page
function startGame() {
    startPage.style.display = "none";        // Hide the start page
    gameInterface.style.display = "flex";    // Show the game interface
    cardsContainer.style.display = "flex";    // Show the card container
    let types = ["S", "W", "F"];
    deck = [];
    for (let i = 0; i < types.length; i++){
        deck.push(types[i]);
    }
    console.log(deck);
}

function chosenCard(card) {
    cardsContainer.style.display = "none";  // Hide Cards at the bottom
    chosenCardDisplay.style.display = "flex";
    const chosenCardImg = document.getElementById("chosen-card-img"); // Get the img element
    gameInterface.style.display = "none";
    chosenCardImg.style.display = "flex";
    chosenCardHeader.style.display = "flex";

    if (card == snowCard){
        chosenCardImg.src = "cards/S.webp";
    }
    else if (card == fireCard) {
        chosenCardImg.src = "cards/F.webp";
    }
    else if (card == waterCard) {
        chosenCardImg.src = "cards/W.webp";
    }
}

// Muliplayer or Single Player eventlisteners
singlePlayerBtn.addEventListener("click", startGame);
multiplayerBtn.addEventListener("click", startGame);

const snowCard = document.getElementById("snow");
const fireCard = document.getElementById("fire");
const waterCard = document.getElementById("water");

snowCard.addEventListener("click", () => chosenCard(snowCard));
fireCard.addEventListener("click", () => chosenCard(fireCard));
waterCard.addEventListener("click", () => chosenCard(waterCard));

