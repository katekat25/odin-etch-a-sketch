console.log("Hello worldddd");
const container = document.querySelector("#container");
const inputBox = document.querySelector("input");

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let userRows = e.target.value;
        drawPixels(getPixelCount(userRows), getDimensions(userRows));
    }
});

function drawPixels(numberOfPixels, pixelDimensions) {
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