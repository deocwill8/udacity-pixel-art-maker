// Select color input
let selectedColor;
let storedColor;
let gridHeight;
let gridWidth;
let submitValue;

function pickColor() {
    //select color
    selectedColor = document.getElementById("colorPicker");
    selectedColor.addEventListener("click", pickColor);
    //store selected color
    storedColor = selectedColor.value;
}

// When size is submitted by the user, call makeGrid()
function makeGrid(e) {
    e.preventDefault();
    //create rows based on size input
    //TODO store in var 
    for(let height = 0; height < $("#inputHeight").val(); height++){
        $("table").append("<tr></tr>");
    }
    //create columns based on size input
    //TODO store in var 
    for(let width = 0; width < $("#inputWidth").val(); width++){
        $("tr").append("<td></td>");
    }
}

document.getElementById("submitBtn").addEventListener("click", makeGrid);

//change color of td
$("td").click(function(){
    $("td").css("background-color", storedColor);
})