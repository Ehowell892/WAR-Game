class Player {
    constructor(name) {
        this.name = prompt("Player's name?");
        this.deck = [];
        this.points = 0;

    }
}
const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

let deck = [];
let player1 = new Player();
let player2 = new Player();

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}


function resetGame() {
    deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + " of " + suits[i]);
        }
    }
    shuffleDeck(deck);
}





function startWarGame() {
    const player1Name = prompt("Player 1 Name:");
    const player1 = new Player;
    const player2Name = prompt("Player 2 Name:");
    const player2 = new Player;
}

console.clear("Start Game");
resetGame("End of game, reset");

const halfDeckLength = deck.length / 2;
player1.deck = deck.slice(0, halfDeckLength);
player2.deck = deck.slice(halfDeckLength);
console.log(deck);
console.log(player1.name + "s first card: " + player1.deck[0]);
console.log(player2.name + "s first card: " + player2.deck[0]);




while (player1.deck.length > 0 && player2.deck.length > 0) {
    const player1Card = player1.deck.shift();
    const player2Card = player2.deck.shift();

    console.log(player1.name + " plays: " + player1Card);
    console.log(player2.name + " plays: " + player2Card);
    if (
        values.indexOf(player1Card.split(" ")[0]) >
        values.indexOf(player2Card.split(" ")[0])
    ) {
        console.log(player1.name + " wins the round.");
        player1.points++;
    } else if (
        values.indexOf(player1Card.split(" ")[0]) <
        values.indexOf(player2Card.split(" ")[0])
    ) {
        console.log(player2.name + " wins the round.");
        player2.points++;
    } else {
        console.log("It's a tie");
    }
}
