//The Gameboard will be stored as an array inside of a Gameboard object
const Gameboard = (() => {
    let board0 = { 0: '', 1: '', 2: '', };
    let board1 = { 0: '', 1: '', 2: '', };
    let board2 = { 0: '', 1: '', 2: '', };

    //Creation of the gameboard.
    const cells = (() => {
        let grid = document.querySelectorAll('.grid-row');
        grid.forEach(div => {
            for (let i = 0; i < 3; i++) {
                let content = document.createElement('button');
                content.classList.add(i);
                content.classList.add('content');
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

//The players will also be stored inside objects
let u = 0;
const Player = () => {

    let turn = () => {

        let move;

        let boxes = document.querySelectorAll('.content');
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

//Updates the board object according to player input
let box = document.querySelectorAll('.content');
box.forEach((button) => {
    let gridA = document.querySelector('.a');
    let gridB = document.querySelector('.b');
    let gridC = document.querySelector('.c');

    button.addEventListener('click', function () {
        button.textContent = Player();
        button.setAttribute('id', 'clicked');

        if (button.parentElement == gridA) {
            console.log(button.classList[0]);
            if (button.classList[0] == 0) {
                Gameboard.board0[0] = button.textContent;
            }
            else if (button.classList[0] == 1) {
                Gameboard.board0[1] = button.textContent;
            }
            else if (button.classList[0] == 2) {
                Gameboard.board0[2] = button.textContent;
            }
        }
        else if (button.parentElement == gridB) {
            if (button.classList[0] == 0) {
                Gameboard.board1[0] = button.textContent;
            }
            else if (button.classList[0] == 1) {
                Gameboard.board1[1] = button.textContent;
            }
            else if (button.classList[0] == 2) {
                Gameboard.board1[2] = button.textContent;
            }
        }
        else if (button.parentElement == gridC) {
            if (button.classList[0] == 0) {
                Gameboard.board2[0] = button.textContent;
            }
            else if (button.classList[0] == 1) {
                Gameboard.board2[1] = button.textContent;
            }
            else if (button.classList[0] == 2) {
                Gameboard.board2[2] = button.textContent;
            }
        }
        button.disabled = true;
    })
})

//function checks on every click whether the game is finished
const Win = (() => {
    let buttons = document.querySelectorAll('.content');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let arr0 = Object.values(Gameboard.board0);
            let arr1 = Object.values(Gameboard.board1);
            let arr2 = Object.values(Gameboard.board2);
            let testing = x => x == 'X' || x == 'O';
            console.log(arr0.every(testing), arr1.every(testing), arr2.every(testing));
            for (let i = 0; i < 3; i++) {
                if (Gameboard['board' + i][0] === Gameboard['board' + i][1] &&
                    Gameboard['board' + i][0] === Gameboard['board' + i][2] &&
                    Gameboard['board' + i][0] != '') {
                    let winner = 'Congratulations Player ' + button.textContent;
                    buttons.disabled = true;
                    return alert(winner);
                }
                else if (Gameboard['board' + 0][i] === Gameboard['board' + 1][i] &&
                    Gameboard['board' + 0][i] === Gameboard['board' + 2][i] &&
                    Gameboard['board' + 0][i] != '') {
                    let winner = 'Congrats buddy';
                    return alert(winner);
                }
                else if ((Gameboard['board' + 0][0]) == Gameboard['board' + 1][1] &&
                    (Gameboard['board' + 2][2]) == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 0][0] != '') {
                    let winner = 'Nice one boss';
                    return alert(winner);
                }
                else if (Gameboard['board' + 0][2] == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 2][0] == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 0][2] != '') {
                    let winner = 'Nice going';
                    return alert(winner);
                }
                else if (arr0.every(testing) == true && arr1.every(testing) == true &&
                    arr2.every(testing) == true) {
                    let tied = 'Play Again'
                    return alert(tied);
                }
            }
        })
    })
})();
const Reset = (() => {
    let redo = document.querySelector('#reset');
    redo.addEventListener('click', function () {
        let boxed = document.querySelectorAll('.content');
        boxed.forEach(boxer => {
            boxer.textContent = '';
            boxer.disabled = false;
            for (let i = 0; i < 3; i++) {
                Gameboard.board0[i] = boxer.textContent;
                Gameboard.board1[i] = boxer.textContent;
                Gameboard.board2[i] = boxer.textContent;
            }
        })
    })
})();