//The Gameboard will be stored as an array inside of a Gameboard object
const Gameboard = () => {
    let board0 = {
        0: '1',
        1: '2',
        2: '3',
    };
    let board1 = {
        0: '4',
        1: '5',
        2: '6',
    };
    let board2 = {
        0: '7',
        1: '8',
        2: '9',
    };
    return { board0, board1, board2 };
}

//The players will also be stored inside objects
let u = 0;
const Player = () => {

    let turn = () => {

        let move = 'test';

        let boxes = document.querySelectorAll('button');
        boxes.forEach((button) => {
            button.addEventListener('click', function () {
                console.log('counter: ' + u);

            });
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
            const boards2 = boards[i][i - 1 || i];

            content.textContent = boards2
            div.appendChild(content);
        };
    })

})();
let box = document.querySelectorAll('button');
box.forEach((button) => {
    let boards = Object.values(Gameboard());


    button.addEventListener('click', function () {
        button.textContent = Player();
        button.setAttribute('id', 'clicked');

        Gameboard()['board' + button.className][button.className] = 'testing';
        console.log('Array: ' + Gameboard()['board' + button.className][button.className])

        button.disabled = true;
    })
})