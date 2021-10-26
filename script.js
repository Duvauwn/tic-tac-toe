//The Gameboard will be stored as an array inside of a Gameboard object
function Gameboard() {
    let board0 = { 0: '1', 1: '2', 2: '3', };
    let board1 = { 0: '4', 1: '5', 2: '6', };
    let board2 = { 0: '7', 1: '8', 2: '9', };
    console.log('testing');
    return [Gameboard || { board0, board1, board2 }];
}
//The players will also be stored inside objects
let u = 0;
const Player = () => {

    let turn = () => {

        let move;

        let boxes = document.querySelectorAll('button');
        boxes.forEach((button) => {
            if (u % 2 == 0) {
                move = 'X';
                return move;
            }
            else if (u % 2 != 0) {
                move = 'O';
                return move;
            } else {
                move = 'fail';
                return move;
            }
        });
        u++;
        return move;

    }
    return turn();
}


//There should be an object to control the flow of the game itself


//Creation of the gameboard. Possibly to be put into Gameboard() object
const cells = (() => {
    let grid = document.querySelectorAll('.grid-row');
    grid.forEach(div => {
        for (let i = 0; i < 3; i++) {
            let content = document.createElement('button');
            content.classList.add(i);
            const boards = Object.values(Gameboard());
            if (div.className == 'grid-row a') {
                if (content.className == 0) {
                    content.textContent = boards[0][0];
                }
                else if (content.className == 1) {
                    content.textContent = boards[0][1];
                }
                else if (content.className == 2) {
                    content.textContent = boards[0][2];
                }
            }
            else if (div.className == 'grid-row b') {
                if (content.className == 0) {
                    content.textContent = boards[1][0];
                }
                else if (content.className == 1) {
                    content.textContent = boards[1][1];
                }
                else if (content.className == 2) {
                    content.textContent = boards[1][2];
                }
            }
            else if (div.className == 'grid-row c') {
                if (content.className == 0) {
                    content.textContent = boards[2][0];
                }
                else if (content.className == 1) {
                    content.textContent = boards[2][1];
                }
                else if (content.className == 2) {
                    content.textContent = boards[2][2];
                }
            }
            div.appendChild(content);
        };
    })

})();
let box = document.querySelectorAll('button');
box.forEach((button) => {
    let gridA = document.querySelector('.a');
    let gridB = document.querySelector('.b');
    let gridC = document.querySelector('.c');
    button.addEventListener('click', function () {
        button.textContent = Player();
        button.setAttribute('id', 'clicked');

        if (button.parentElement == gridA) {
            if (button.className == 0) {
                console.log('A: ' + button.className);
            }
            else if (button.className == 1) {
                console.log('A: ' + button.className);
            }
            else if (button.className == 2) {
                console.log('A: ' + button.className);
            }
        }
        else if (button.parentElement == gridB) {
            if (button.className == 0) {
                console.log('B: ' + button.className);
            }
            else if (button.className == 1) {
                console.log('B: ' + button.className);
            }
            else if (button.className == 2) {
                console.log('B: ' + button.className);
            }
        }
        else if (button.parentElement == gridC) {
            if (button.className == 0) {
                console.log('C: ' + button.className);
            }
            else if (button.className == 1) {
                console.log('C: ' + button.className);
            }
            else if (button.className == 2) {
                console.log('C: ' + button.className);
            }
        }
        button.disabled = true;
    })
})