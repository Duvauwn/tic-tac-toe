//The Gameboard will be stored as an array inside of a Gameboard object
const Gameboard = (() => {
    let board0 = { 0: '1', 1: '2', 2: '3', };
    let board1 = { 0: '4', 1: '5', 2: '6', };
    let board2 = { 0: '7', 1: '8', 2: '9', };

    //Creation of the gameboard. Possibly to be put into Gameboard() object
    const cells = (() => {
        let grid = document.querySelectorAll('.grid-row');
        grid.forEach(div => {
            for (let i = 0; i < 3; i++) {
                let content = document.createElement('button');
                content.classList.add(i);
                const boards = [board0, board1, board2];
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

    return { board0, board1, board2, cells };
})();
const Win = (() => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            for (let i = 0; i < 3; i++) {
                if (Gameboard['board' + i][0] === Gameboard['board' + i][1] &&
                    Gameboard['board' + i][0] === Gameboard['board' + i][2]) {
                    let winner = 'Congratulations Player';
                    return alert(winner);
                }
                else if (Gameboard['board' + 0][i] === Gameboard['board' + 1][i] &&
                    Gameboard['board' + 0][i] === Gameboard['board' + 2][i]) {
                    let winner = 'Congrats buddy';
                    return alert(winner);
                }
                else if ((Gameboard['board' + 0][0]) == Gameboard['board' + 1][1] &&
                    (Gameboard['board' + 2][2]) == Gameboard['board' + 1][1]) {
                    let winner = 'Nice one boss';
                    return alert(winner);
                }
                else if (Gameboard['board' + 0][2] == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 2][0] == Gameboard['board' + 1][1]) {
                    let winner = 'Nice going';
                    return alert(winner);
                }
            }
        })
    })
})();
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
                Gameboard.board0[0] = button.textContent;
            }
            else if (button.className == 1) {
                Gameboard.board0[1] = button.textContent;
            }
            else if (button.className == 2) {
                Gameboard.board0[2] = button.textContent;
            }
        }
        else if (button.parentElement == gridB) {
            if (button.className == 0) {
                Gameboard.board1[0] = button.textContent;
            }
            else if (button.className == 1) {
                Gameboard.board1[1] = button.textContent;
            }
            else if (button.className == 2) {
                Gameboard.board1[2] = button.textContent;
            }
        }
        else if (button.parentElement == gridC) {
            if (button.className == 0) {
                Gameboard.board2[0] = button.textContent;
            }
            else if (button.className == 1) {
                Gameboard.board2[1] = button.textContent;
            }
            else if (button.className == 2) {
                Gameboard.board2[2] = button.textContent;
            }
        }
        button.disabled = true;
    })
})