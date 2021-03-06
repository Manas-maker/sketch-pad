const INITIAL_DIMENSION = 16;
const slate = document.querySelector('#slate');
const clearBtn = document.querySelector('#clear');
drawGrid(INITIAL_DIMENSION);
clearBtn.addEventListener('click', clearGrid);


function drawGrid(dimension) {
    const divs = []
    slate.style.gridTemplateColumns = '1fr '.repeat(dimension);
    slate.style.gridTemplateRows = '1fr '.repeat(dimension);
    for (let i = 0; i < (dimension**2); i++) {
        divs[i] = document.createElement('div');
        divs[i].className = 'pixel';
        divs[i].id = i;
        slate.appendChild(divs[i]);
    }
    let pixels = document.querySelectorAll('div.pixel');
    pixels.forEach((pixel) => pixel.addEventListener('mouseenter',() => colorNew(pixel)));
}

function colorNew(pixel) {
   switch (pixel.style.backgroundColor) {
       case '':
           pixel.style.backgroundColor = generateRandomColor();
           break;
        default:
            currColor = pixel.style.backgroundColor;
            pixel.style.backgroundColor = tinycolor(currColor).darken(5).toRgbString();
    }
}

function generateRandomColor() {
    const hue = Math.floor(Math.random()*361);
    return `hsl(${hue}, 100%, 50%)`;
}

function clearGrid() {
    slate.textContent = '';
    let newDimensions;
    do {
        newDimensions = prompt('Want smaller pixels? (Enter a number between 0 and 100, 16 for current size)');
    }   while(newDimensions < 0||newDimensions > 100 ||Number.isNaN(newDimensions));
    drawGrid(newDimensions);
}