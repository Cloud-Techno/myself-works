let cities = document.querySelector("#cities");

let newYorkTurnsOn = null;
let zurichTurnsOn = null;
let tokyoTurnsOn = null;
let hour = null;
let minute = null;
let second = null;

// Saatleri çalıştırir ve durdurur
cities.addEventListener("click", function (pEvent) {
    clearInterval(tokyoTurnsOn);
    clearInterval(newYorkTurnsOn);
    clearInterval(zurichTurnsOn);

    if (pEvent.target.id == "zurich") {
        zurichTurnsOn = setTimer(showZurichClock);
    } else if (pEvent.target.id == "newYork") {
        newYorkTurnsOn = setTimer(showNewYorkClock);
    } else if (pEvent.target.id == "tokyo") {
        tokyoTurnsOn = setTimer(showTokyoClock);
    }
});