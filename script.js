console.log("Hello worldddd");
const container = document.querySelector("#container");

let numberOfRows = 5;
let numberOfPixels = (Math.pow(numberOfRows,2));

drawPixels(numberOfPixels);
//eventually will take in user input, but not yet

//make a function that creates divs multiple times

function drawPixels(numberOfPixels) {
    for (let i=0; i < numberOfPixels; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        newDiv.textContent = "What up";
        container.appendChild(newDiv);
        newDiv.style.width = (1000 / numberOfRows) + "px";
        newDiv.style.height = (1000 / numberOfRows) + "px";
    }
    
}