// Create color variable
const color = document.querySelector("#colorPicker");

// Create grid variables
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const sizePicker = document.querySelector("#sizePicker");
const grid = document.querySelector("#pixelCanvas");

// Create refresh info and grid instructions variables

const refresh = document.querySelector("#refresh");
const gridInstructions = document.querySelector("#instructions");

// When size is submitted by the user, call makeGrid() and display grid's instructions and refresh info
sizePicker.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid();
    refresh.classList.remove("display-none");
    gridInstructions.classList.remove("display-none");
});

//  makeGrid() function
function makeGrid (){
    grid.innerHTML="";
    for (let r = 0; r < height.value; r++ ) {
        const row = document.createElement("tr");
        for (let c = 0; c < width.value; c++){
            const cell = document.createElement("td");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    //click to paint cells
    grid.addEventListener("click", function(event){
        event.target.style.backgroundColor = color.value;
    })
    //double click to remove paint from cells
    grid.addEventListener("dblclick", function(event){
        event.target.style.backgroundColor = "white";
    })
    }
}
