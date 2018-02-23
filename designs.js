// Select color input
let selectedColor, storedColor, gridHeight, gridWidth, table, rows;

//JS function to get the color selected by user
function pickColor() {
    //select color
    selectedColor = document.getElementById("colorPicker");
    selectedColor.addEventListener("click", pickColor);
    //store selected color
    storedColor = selectedColor.value;
}

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
    //prevents the form from submitting and refreshing the page
    e.preventDefault();
    

    //create rows based on input from user
    gridHeight = $("#inputHeight").val();
    table = $('#pixelCanvas');

    for(let height = 0; height < gridHeight; height++){
       table.append("<tr></tr>");
    }

    //create columns based on input from user
    gridWidth = $("#inputWidth").val();
    rows = $('tr');
    
    for(let width = 0; width < gridWidth; width++){
        rows.append("<td></td>");
        changeCellColor();
    }
}


function changeCellColor(){
    table.on("click", "td", function() {
        $(this).css("background-color", storedColor);
    });
}

//JS to listen for the submit button being clicked, if so call makeGrid()
document.getElementById("submitBtn").addEventListener("click", makeGrid);