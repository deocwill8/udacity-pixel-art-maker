
let selectedColor = document.getElementById('colorPicker');
let row = document.createElement("tr"); 
let data = document.createElement("td");
let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');
let submitBtn = document.getElementById('btnSubmit');

// Select color input
selectedColor.addEventListener("change", pickColor);

 function pickColor() {
    let storedColor = selectedColor.value;
    table.style.color = storedColor;
    return storedColor;
 }

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener("click", makeGrid);

function makeGrid(event) {
  // Your code goes here!
  event.preventDefault();

  table.innerHTML = '';
  
  for(let i = 0; i < gridHeight.value; i++){
    row = document.createElement("tr"); 
    table.appendChild(row);
    for(let i = 0; i < gridWidth.value; i++){
        data = document.createElement("td");
        row.appendChild(data);
        }   
    }
}

table.addEventListener('click', changeCellColor);

function changeCellColor(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = pickColor();
    } else {
        console.log('you have not clicked a cell');
    }
}