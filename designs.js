// Select color input
let selectedColor;
let storedColor;
let gridHeight;
let gridWidth;
let submitValue;

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
    //prevents the form from submitting and refreshing the page
    e.preventDefault();

    //create rows based on input from user
    gridHeight = $("#inputHeight").val();
    for(let height = 0; height < gridHeight; height++){
        $("table").append("<tr></tr>");
    }

    //create columns based on input from user
    gridWidth = $("#inputWidth").val();
    for(let width = 0; width < gridWidth; width++){
        $("tr").append("<td></td>");
        changeBackground();
    }
}

//JS to listen for the submit button being clicked, if so call makeGrid()
document.getElementById("submitBtn").addEventListener("click", makeGrid);

//function to get the color selected by user
function pickColor() {
    //select color
    selectedColor = document.getElementById("colorPicker");
    selectedColor.addEventListener("click", pickColor);
    //store selected color
    storedColor = selectedColor.value;
}

//change color of td
function changeBackground(){
    let cell = $("td");
    cell.click(function(){
    cell.css("background-color", storedColor);
    })
}