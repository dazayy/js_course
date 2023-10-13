const timeText = document.querySelector(".time_field-text");
const btnFull = document.getElementById("full");
const btnData = document.getElementById("data");
const btnTime = document.getElementById("time");

let mode = "data";

setInterval(update, 1000);
update();

btnFull.onclick = bindMode("full");  
btnData.onclick = bindMode("data");  
btnTime.onclick = bindMode("time");  

function update() {
    timeText.textContent = format(mode);
}
function format(formatMode, dataRegion="ru") {
    const now = new Date();
    switch (formatMode) {
        case "data": {
            return now.toLocaleDateString(dataRegion);
        }
        case "time": {
            return now.toLocaleTimeString(dataRegion);
        }
        case "full": {
            return `${now.toLocaleDateString(dataRegion)}/${now.toLocaleTimeString(dataRegion)}`;
        }
    }   
}
function bindMode(nameMode) {
    return () => {
        mode = nameMode;
        update();
    }
}
