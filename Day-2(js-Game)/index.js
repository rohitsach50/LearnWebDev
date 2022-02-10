let msgEl = document.getElementById("msg-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
msg=""
let startGame = document.getElementById("start")
let newCard = document.getElementById("new-card")
let hasBlackjack = false
let isAlive = false
let sum = 0
let card = []
startGame.addEventListener('click', game)
newCard.addEventListener('click', ncard)


function getRandNumb() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function game() {
    isAlive = true
    hasBlackjack=false
    let firstCard = getRandNumb()
    let secondCard = getRandNumb()
    card = [firstCard,secondCard]
   
    sum = (firstCard + secondCard)
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " "    
    }
    sumEl.textContent += sum
    if (sum===21) {
        msg="You have WON!"
        hasBlackjack = true
    }
    else if (sum<21) {
        msg="You can get new card"
        
    }
    else{
        msg = "You Lose, plz try again"
        isAlive = false
        // hasBlackjack = false
    }
    msgEl.textContent=msg

}

function ncard() {
    if (hasBlackjack ===false && isAlive===true) {
        thirdCard = getRandNumb()
        card.push(thirdCard)
        sum += thirdCard
        renderGame()
    }

}




