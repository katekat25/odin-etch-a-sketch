console.log("Hello worldddd");
const container = document.querySelector("#container");
const inputBox = document.querySelector("input");

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let userRows = e.target.value;
        if (userRows > 100) {
            alert("Please enter a number less than 100.");
            e.target.value = '';
            return;
        }
        if (userRows < 1) {
            alert("Please enter a number that's at least 1.");
            e.target.value = '';
            return;
        }
        populateGrid(getPixelCount(userRows), getDimensions(userRows));
    }
});

function populateGrid(numberOfPixels, pixelDimensions) {
    if (container.firstChild) {
        container.innerHTML = '';
    }
    for (let i = 0; i < numberOfPixels; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        newDiv.textContent = "What up";
        container.appendChild(newDiv);
        newDiv.style.width = pixelDimensions;
        newDiv.style.height = pixelDimensions;
    }
}



function getDimensions(numberOfRows) {
    return (1000 / numberOfRows) + "px";
}

function getPixelCount(numberOfRows) {
    return Math.pow(numberOfRows, 2);
}