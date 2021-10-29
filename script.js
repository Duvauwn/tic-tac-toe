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
                if (div.id == 'grid0') {
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
                else if (div.id == 'grid1') {
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
                else if (div.id == 'grid2') {
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

const Computer = (() => {
    let comp = document.querySelector('#computer');
    let compPlay = false;
    comp.addEventListener('click', function () {
        Computer.compPlay = true;
        console.log('click', compPlay);
    })
    let compTurn = () => { return Math.floor((Math.random() * 30) / 10); }
    return { comp, compPlay, compTurn };
})();

//The players will also be stored inside objects
let u = 0;
const Player = () => {

    let turn = () => {

        let move;

        let boxes = document.querySelectorAll('.content');
        if (Computer.compPlay == true) {
            boxes.forEach((button) => {
                if (u % 2 == 0) {
                    move = 'X';
                    return move;
                }


            });

            if (u % 2 != 0) {

                move = 'O';

                let ones = Computer.compTurn();
                let twos = Computer.compTurn();

                let choice0 = document.querySelector('#grid' + ones);
                let choice1 = choice0.children[twos];

                choice1.textContent = move;
                Gameboard['board' + ones][twos] = choice0.children[twos].textContent;
                choice1.disabled = true;
                choice1.setAttribute('id', 'clicked');

                return move;
            }
        }
        else {
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
        }

        u++;
        return move;

    }
    return turn();
}

//Updates the board object according to player input
let box = document.querySelectorAll('.content');
box.forEach((button) => {
    let gridA = document.querySelector('#grid0');
    let gridB = document.querySelector('#grid1');
    let gridC = document.querySelector('#grid2');

    button.addEventListener('click', function () {

        button.textContent = Player();

        button.setAttribute('id', 'clicked');


        if (button.parentElement == gridA) {
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

            for (let i = 0; i < 3; i++) {
                if (Gameboard['board' + i][0] === Gameboard['board' + i][1] &&
                    Gameboard['board' + i][0] === Gameboard['board' + i][2] &&
                    Gameboard['board' + i][0] != '') {
                    let winner = 'Player ' + button.textContent + ' Wins!';
                    return alert(winner);
                }
                else if (Gameboard['board' + 0][i] === Gameboard['board' + 1][i] &&
                    Gameboard['board' + 0][i] === Gameboard['board' + 2][i] &&
                    Gameboard['board' + 0][i] != '') {
                    let winner = 'Player ' + button.textContent + ' Wins!';
                    return alert(winner);
                }
                else if ((Gameboard['board' + 0][0]) == Gameboard['board' + 1][1] &&
                    (Gameboard['board' + 2][2]) == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 0][0] != '') {
                    let winner = 'Player ' + button.textContent + ' Wins!';
                    return alert(winner);
                }
                else if (Gameboard['board' + 0][2] == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 2][0] == Gameboard['board' + 1][1] &&
                    Gameboard['board' + 0][2] != '') {
                    let winner = 'Player ' + button.textContent + ' Wins!';
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

//inputs for players to enter their names
const names = (() => {
    let playerX = document.querySelector('#name-X');
    playerX.addEventListener('click', function () {
        let nameX = prompt('Enter your name', 'Enter your name');
        let head1 = document.querySelector('#player1');
        head1.textContent = nameX;
    })
    let playerO = document.querySelector('#name-O');
    playerO.addEventListener('click', function () {
        let nameO = prompt('Enter your name', 'Enter your name');
        let head2 = document.querySelector('#player2');
        head2.textContent = nameO;
    })
})();
//reset button
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