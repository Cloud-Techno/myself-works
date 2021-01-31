/* 
let counter = 0;
//default olarak Asia verildi.
// Istenilen sehirler uluslarasi kullanilan isim belirtilerek kullanilabilir
let timezone = "Asia/Tokyo"; //Europe/Zurich, America/New_York

setInterval(function(){
    createZoneTime();
},1000);

document.getElementById("select-time").addEventListener('change',function(e){
    timezone = e.target.value;
});



// create Time with hours minute and seconds
function createZoneTime(){
    let currentTime = new Date(new Date().toLocaleString("ch-DE", {timeZone: timezone}));
    let hours = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let time = addTimeToUI(hours,minute,second);
    document.getElementById("clock").innerHTML = time; 
}
// create Element to UI
function addTimeToUI(pHours,pMinutes,pSeconds){
    let timeElement = `
    <table>
    <tr>
        <td>${String(pHours)}</td>
        <td>${String(pMinutes)}</td>
        <td>${String(pSeconds)}</td>
        
    </tr>
</table>
    `;
    return timeElement;
}



 */
/**
 * ..
 */

// Model 
let counter = 0;
let timezone = "Asia/Tokyo"; // Europe/Zurich, America/New_York


setInterval(function(){
    clickEventHandler();
}, 1000);

document.querySelector("#slc-timezone").addEventListener("change", function(pEvent){
    timezone = pEvent.target.value;
});

// Controller
function clickEventHandler(){
    let currentTime = new Date(new Date().toLocaleString("ch-DE", {timeZone: timezone}));
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let html = createTable(hours, minutes, seconds);
    document.querySelector("#main-container").innerHTML = html;
}

// UI
function createTable(pHours, pMinutes, pSeconds){
    let htmlFragment = `
        <table border="1">
            <tr>
                <td>${String(pHours).padStart(2, '0')}:</td> 
                <td>${String(pMinutes).padStart(2, '0')}:</td> 
                <td>${String(pSeconds).padStart(2, '0')}</td>
            </tr>
        </table>
    `;
    return htmlFragment;
}


