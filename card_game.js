const deck = [6, 4, 3, 2, 7, 8, 5, 1, 10]

function shuffleDeck (){
    for (let i = deck.length-1; i>0; i--){
        const j = Math.floor(Math.random()* (i+1));
        //Algorithm Fisher Yates
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards(numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards
    
}

shuffleDeck()
const player1 = dealCards(3)
const player2 = dealCards(3)
const player3 = dealCards(3)

console.log('Player 1 hand: ',player1)
console.log('Player 2 hand: ',player2)
console.log('Player 3 hand: ',player3)

