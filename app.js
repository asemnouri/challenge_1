let allElements = document.querySelectorAll('.container .row div')
let button = document.getElementById('myButton')
let player = document.getElementById('player')

let currentPlayer = 'playerX'
let playerXArray=[]
let playerOArray=[]
const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
allElements.forEach(element => {
    element.addEventListener('click', clickMe)
})

function clickMe(e) {
    const elements = Array.from(allElements)
    const index = elements.indexOf(e.target)
    if (allElements[index].classList.contains('playerX') || allElements[index].classList.contains('playerO')) {
        // if (allElements[index].classList.contains('playerX')) {
        //     allElements[index].classList.remove("playerX");
        //     currentPlayer = 'playerX'
        //     player.innerHTML = "player X turn now"
        // }
        // if (allElements[index].classList.contains('playerO')) {
        //     allElements[index].classList.remove("playerO");
        //     currentPlayer = 'playerO'
        //     player.innerHTML = "player O turn now"
        // }
    } else {
        if (currentPlayer === 'playerX') {
            allElements[index].classList.add('playerX')
            currentPlayer = 'playerO'
            player.innerHTML = "player O turn now"
            playerXArray.push(index)
        } else {
            allElements[index].classList.add('playerO')
            currentPlayer = 'playerX'
            player.innerHTML = "player X turn now"
            playerOArray.push(index)
        }
        for(let i=0;i<possibilities.length;i++){
            if(playerOArray.includes(possibilities[i][0])&&playerOArray.includes(possibilities[i][1])&&playerOArray.includes(possibilities[i][2])){
                player.innerHTML = "player O won the game"
            }else if(playerXArray.includes(possibilities[i][0])&&playerXArray.includes(possibilities[i][1])&&playerXArray.includes(possibilities[i][2])){
                player.innerHTML = "player X won the game"
            }
        }
    }

}

button.addEventListener('click', (e) => {
    allElements.forEach(element => {
        if (element.classList.contains('playerO')) {
            element.classList.remove("playerO");
        }
        if (element.classList.contains('playerX')) {
            element.classList.remove("playerX");
        }
    })
})

