console.log("Hello worldddd");
const container = document.querySelector("#container");

let numberOfDivs = 16;

makeManyDivs(numberOfDivs);
//eventually will take in user input, but not yet

//make a function that creates divs multiple times

function makeManyDivs(numberOfDivs) {
    for (let i=0; i < numberOfDivs; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        newDiv.textContent = "What up";
        container.appendChild(newDiv);
    }
}