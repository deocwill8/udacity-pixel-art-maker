
let selectedColor = document.getElementById('colorPicker');
let storedColor;
let row = document.createElement("tr"); 
let data = document.createElement("td");
let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');
let submitBtn = document.getElementById('btnSubmit');

// Select color input
selectedColor.addEventListener("change", pickColor);

 function pickColor() {
  storedColor = selectedColor.value;
  console.log(selectedColor.value);
 }

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener("click", makeGrid);

function makeGrid(e) {
  // Your code goes here!
  e.preventDefault();
  
  for(let i = 0; i < gridHeight.value; i++){
    row = document.createElement("tr"); 
    table.appendChild(row);
    for(let i = 0; i < gridWidth.value; i++){
        data = document.createElement("td");
        row.appendChild(data);
        }   
    }
    data.addEventListener('click', changeCellColor);
}


function changeCellColor() {
    console.log('cell has been clicked');
    data.style.backgroundColor = storedColor;
}