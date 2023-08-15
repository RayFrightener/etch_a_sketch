
const button = document.getElementById("button");
 
button.addEventListener("click", () => {
    const gridSize = prompt("Enter a grid size (up to 100");
    
    while(!isValidGridSize){
        gridSize = prompt("Please enter a valid gridSize: ");
    }

    function isValidGridSize(size){
        return !isNaN(size) && parseInt(size) > 0 && parseInt(size) <= 100;
    }
    upgradeGrid(gridSize);
})

function upgradeGrid(gridSize){
    const container = document.getElementById("container");
    container.innerHTML = "";

    for (let i=0; i<gridSize; i++){
        let gridElement= document.createElement("div");
        container.appendChild(gridElement);
    
        gridElement.addEventListener("mouseover",() => {
            gridElement.style.background ="black";
        });
    }
}

const container = document.getElementById("container");

for(let i = 0; i < 256; i++){

    let gridElement = document.createElement("div");
    container.appendChild(gridElement);

}

const gridDivs = document.querySelectorAll("#container > div");
gridDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.background = "black";
    });
});

