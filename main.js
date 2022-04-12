
async function LoadData() {
    const response = await fetch("https://api.pray.zone/v2/times/today.json?city=amman");
    const data = await response.json();
    let salaat=data.results.datetime[0].times;
    console.log(data)
    // document.write(`<div><h1> Fajr :${salaat.Fajr}</h1>
    // <h1> Dhuhr :${salaat.Dhuhr}</h1></div>`)
    let taqwem =document.getElementById("taqwem");
    taqwem.innerHTML= `<table><tr><td>${salaat.Fajr}</td><td>الفجر</td> </tr>
                      <tr> <td>${salaat.Dhuhr}</td><td>الظهر</td> </tr>
                      <tr> <td>${salaat.Asr}</td><td>العصر</td> </tr>
                      <tr> <td>${salaat.Maghrib}</td><td>المغرب</td> </tr>
                      <tr> <td>${salaat.Isha}</td><td>العشاء</td> </tr></table>`;


    // for (let index = 0; index < data.length; index++) {

    //     document.getElementById("s").innerHTML += "<option>" + data[index].datetime + "</option>"

    // }
//   document.getElementById("s").onchange=function(){
//       for(let j=0;j<data.length;j++){
//           if(data[j].name===document.getElementById("s").value){
//               document.getElementById("show").innerHTML=data[j].times;
//           }
//       }
//   }
}
LoadData();

function myFunction() {
    let d = new Date();
    document.getElementById("time").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds()+"  "+"<br>"+d.getDate()+"/"+  d.getMonth()+"/"+
d.getFullYear()}
    setInterval(myFunction, 10);


    // function formatAMPM(date) {
    //     var sec=date.getSeconds();
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     var strTime = hours + ':' + minutes +":"+sec+ ' ' + ampm;
    //     return strTime;
    //   }
      
    //   console.log(formatAMPM(new Date))