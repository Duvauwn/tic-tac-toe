//The Gameboard will be stored as an array inside of a Gameboard object
const Gameboard = () => {
    let board1 = [
        { 0: null },
        { 1: null },
        { 2: null },
    ];
    let board2 = [
        { 0: null },
        { 1: null },
        { 2: null },
    ];
    let board3 = [
        { 0: null },
        { 1: null },
        { 2: null },
    ];
    return { board1, board2, board3 };
}

//The players will also be stored inside objects
let u = 0;
const Player = () => {

    let turn = () => {

        let move = 'test';

        let boxes = document.querySelectorAll('button');
        boxes.forEach((button) => {
            button.addEventListener('click', function () {
                console.log(u);

            });
            if (u % 2 == 0) {
                move = 'Xs';
                return move;
            }
            else if (u % 2 != 0) {
                move = 'Os';
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
            content.classList.add(i)
            const boards = Object.values(Gameboard());
            const boards2 = boards[i][i][i];
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
        boards[button.className][button.className] = boards.className;
        console.log('Class: ' + button.className);
    })
})