console.log("Hello worldddd");
const container = document.querySelector("#container");

let numberOfRows = 5;
let numberOfDivs = (Math.pow(numberOfRows,2));

makeManyDivs(numberOfDivs);
//eventually will take in user input, but not yet

//make a function that creates divs multiple times

function makeManyDivs(numberOfDivs) {
    for (let i=0; i < numberOfDivs; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        newDiv.textContent = "What up";
        container.appendChild(newDiv);
        newDiv.style.width = (1000 / Math.sqrt(numberOfDivs)) + "px";
        newDiv.style.height = (1000 / Math.sqrt(numberOfDivs)) + "px";
    }
    
}