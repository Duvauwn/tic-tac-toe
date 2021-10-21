//The Gameboard will be stored as an array inside of a Gameboard object

const gameboard = [

]

//The players will also be stored inside objects

//There should be an object to control the flow of the game itself
const tt = (() => {
    let grid = document.querySelector('#grid');
    for (let i = 0; i < 9; i++) {
        let content = document.createElement('div');
        content.classList.add(i);
        content.textContent = 'test';
        grid.appendChild(content);
    };
})();
