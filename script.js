const container = document.querySelector("#container");
const inputBox = document.querySelector("input");

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let userRows = e.target.value;
        if (userRows > 100) {
            alert("Please enter a number that's less than 100.");
            e.target.value = '';
            return;
        }
        if (userRows < 1) {
            alert("Please enter a number that's at least 1.");
            e.target.value = '';
            return;
        }
        if (userRows % 1 != 0) {
            alert("Please enter a whole number.");
            e.target.value = '';
            return;
        }
        let pixelCount = getPixelCount(userRows);
        let dimensions = getDimensions(userRows);
        populateGrid(pixelCount, dimensions);
    }
});

function populateGrid(numberOfPixels, pixelDimensions) {
    if (container.firstChild) {
        container.innerHTML = '';
    }
    for (let i = 0; i < numberOfPixels; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "blank-pixel";
        container.appendChild(newDiv);
        newDiv.style.width = pixelDimensions;
        newDiv.style.height = pixelDimensions;
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = getRandomRgb();
        })
    }
}

function getRandomRgb(){
    let colorValue = Math.floor(Math.random() * 255)
    + "," + Math.floor(Math.random() * 255) + ","
    + Math.floor(Math.random() * 255);
    return "rgb(" + colorValue + ")";
}

function getDimensions(numberOfRows) {
    return (1000 / numberOfRows) + "px";
}

function getPixelCount(numberOfRows) {
    return Math.pow(numberOfRows, 2);
}