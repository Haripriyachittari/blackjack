let player = {
    name: "Hp",
    chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ": $" + player.chips;  



function getRandomNumber() {
    let randomNumber = Math.floor((Math.random() * 13) + 1);
    if (randomNumber > 10)
        return 10;
    else if (randomNumber === 1)
        return 11;
    else
        return randomNumber;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
    
}
 function updateChips(){
  player.chips= +player.chips + sum;  
  playerEl.textContent = player.name + ": $" + player.chips;
 
 }
function renderGame() {
    updateChips();
    if (sum <= 20) {
        message = "Want to draw another card?";
    }
    else if (sum === 21) {
        message = "Yay!! you got the blackjack";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game";
        isAlive = false;
    }
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.innerText = message;
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomNumber();
        cards.push(newCard);
        sum += newCard;
        renderGame();
        
        

    }

}
