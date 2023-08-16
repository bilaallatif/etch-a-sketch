let grid = document.querySelector('#grid');
const GRID_WIDTH = 10;
for (let i = 0; i < GRID_WIDTH ** 2; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.flexBasis = `${100 / GRID_WIDTH}%`;
    cell.addEventListener('mouseover', () => {cell.style.backgroundColor = 'white';});
    grid.appendChild(cell);
}
