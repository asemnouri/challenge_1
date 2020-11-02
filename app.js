let allElements = document.querySelectorAll('.container .row div')
let button = document.getElementById('myButton')

let currentPlayer = 'playerX'


allElements.forEach(element => {
    element.addEventListener('click', clickMe)
})

function clickMe(e) {
    const elements = Array.from(allElements)
    const index = elements.indexOf(e.target)
    if (allElements[index].classList.contains('playerX') || allElements[index].classList.contains('playerO')) {
        if (allElements[index].classList.contains('playerX')) {
            allElements[index].classList.remove("playerX");
            currentPlayer = 'playerX'
        }
        if (allElements[index].classList.contains('playerO')) {
            allElements[index].classList.remove("playerO");
            currentPlayer = 'playerO'
        }
    } else {
        if (currentPlayer === 'playerX') {
            allElements[index].classList.add('playerX')
            currentPlayer = 'playerO'
        } else {
            allElements[index].classList.add('playerO')
            currentPlayer = 'playerX'
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

