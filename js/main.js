document.getElementById("clickMe").onclick = openSensor;

let ledState = false;

function openSensor(){
    const ledContainer = document.getElementById("ledContainer");
    ledContainer.style.display = "block";
    const sensorContainer = document.getElementById("sensorContainer");
    sensorContainer.style.display = "block";

    ledContainer.innerHTML =`
        <svg width="120" height="120">
        <circle
            id="ledCircle"
            cx="60"
            cy="60"
            r="40"
            fill="${ledState ? 'red' : 'grey'}"
            stroke = "black"
            stroke-width="2"
            ></circle>
        </svg>`
    document.getElementById("ledCircle").onclick = toggleLed;
    setInterval(readSensor, 2000);
}
function toggleLed(){
    ledState =!ledState;
    const circle = document.getElementById("ledCircle");
    circle.setAttribute("fill", ledState ? 'red' : 'grey');
}
function readSensor(){
"ss"
}