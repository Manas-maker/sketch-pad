const INITIAL_DIMENSION = 16;
const slate = document.querySelector('#slate');
draw(INITIAL_DIMENSION);
function draw(dimension) {
    const divs = []
    slate.style.gridTemplateColumns = '1fr '.repeat(dimension);
    slate.style.gridTemplateRows = '1fr '.repeat(dimension);
    for (let i = 0; i < (dimension**2 - 1); i++) {
        divs[i] = document.createElement('div.pixel');
        slate.appendChild(divs[i]);
    }
}