//The Gameboard will be stored as an array inside of a Gameboard object
const Gameboard = () => {
    let board = [
        //Values for each part of the board currently manually input for setup
        { 0: 'X' },
        { 1: 'O' },
        { 2: 'X' },
        { 3: 'X' },
        { 4: 'O' },
        { 5: 'O' },
        { 6: 'O' },
        { 7: 'O' },
        { 8: 'X' },
    ];
    return { board };
}

//The players will also be stored inside objects
const Player = () => {

}
let box = document.querySelectorAll('div');
console.log(box)

//There should be an object to control the flow of the game itself

//Creation of the gameboard. Possibly to be put into Gameboard() object
const cells = (() => {
    let grid = document.querySelector('#grid');
    for (let i = 0; i < 9; i++) {
        let content = document.createElement('button');
        content.classList.add('box')
        content.classList.add(i);
        const testing = Object.values(Gameboard());
        const test2 = testing[0][i][i];
        content.textContent = test2
        grid.appendChild(content);
    };
})();
