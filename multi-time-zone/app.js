
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



