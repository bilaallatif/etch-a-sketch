let grid = document.querySelector('#grid');
let grid_size = document.querySelector('#grid-size');
let slider_text = document.querySelector('#slider-text');
let clear_button = document.querySelector('#clear');

function render_grid(grid_width) {
    grid.innerHTML = '';
    
    for (let i = 0; i < grid_width ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flexBasis = `${100 / grid_width}%`;
        cell.addEventListener('mouseover', () => {cell.style.backgroundColor = 'white';});
        grid.appendChild(cell);
    }
}

render_grid(grid_size.value);

grid_size.addEventListener('change', () => {
    slider_text.textContent = `${grid_size.value} x ${grid_size.value}`;
    render_grid(grid_size.value);
});

clear_button.addEventListener('click', () => {render_grid(grid_size.value);});




