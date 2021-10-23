//The Gameboard will be stored as an array inside of a Gameboard object
const Gameboard = () => {
    let board = [
        //Values for each part of the board currently manually input for setup
        { 0: null },
        { 1: null },
        { 2: null },
        { 3: null },
        { 4: null },
        { 5: null },
        { 6: null },
        { 7: null },
        { 8: null },
    ];
    return { board };
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
            content.classList.add('box');
            content.classList.add(i)
            const testing = Object.values(Gameboard());
            const test2 = testing[0][i][i];
            content.textContent = test2
            div.appendChild(content);
        };
    })

})();
let box = document.querySelectorAll('button');
box.forEach((button) => {
    button.addEventListener('click', function () {
        button.textContent = Player();
        button.setAttribute('id', 'clicked');
    })
})