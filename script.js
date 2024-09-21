const container = document.querySelector("#container");
const inputBox = document.querySelector("input");
const clearBtn = document.querySelector("button");

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

clearBtn.addEventListener("click", function() {
    clearGrid();
});

function populateGrid(numberOfPixels, pixelDimensions) {
    clearGrid();
    for (let i = 0; i < numberOfPixels; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "blank-pixel";
        container.appendChild(newDiv);
        newDiv.style.width = pixelDimensions;
        newDiv.style.height = pixelDimensions;
        newDiv.addEventListener("mouseover", () => {
            if (newDiv.style.backgroundColor !== "") {
                let currentColor = newDiv.style.backgroundColor;
                newDiv.style.backgroundColor = increaseOpacity(currentColor);
            } else {
                newDiv.style.backgroundColor = getRandomRgb();
            }
        })
    }
}

function getRandomRgb(){
    let colorValue = Math.floor(Math.random() * 255)
    + "," + Math.floor(Math.random() * 255) + ","
    + Math.floor(Math.random() * 255) + ",";
    let opacity = 0.1;
    return "rgb(" + colorValue + opacity + ")";
}

function getDimensions(numberOfRows) {
    return (1000 / numberOfRows) + "px";
}

function getPixelCount(numberOfRows) {
    return Math.pow(numberOfRows, 2);
}

function clearGrid() {
    if (container.firstChild) {
        container.innerHTML = '';
    }
}

function increaseOpacity(colorArray) {
    let opacity = colorArray.slice(-4, -1);
    if (opacity >= 1) {
        return colorArray;
    } opacity = Number(opacity) + 0.1;
    let newColorArray = colorArray.slice(0, -4) + opacity + ")";
    return newColorArray;
}