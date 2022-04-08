async function LoadData() {
    const response = await fetch("http://api.aladhan.com/v1/timings/1398332113?latitude=51.508515&longitude=-0.1254872&method=2");
    const data = await response.json();
    console.log(data)
//     for (let index = 0; index < data.length; index++) {

//         document.getElementById("s").innerHTML += "<option>" + data[index].name + "</option>"

//     }
//   document.getElementById("s").onchange=function(){
//       for(let j=0;j<data.length;j++){
//           if(data[j].name===document.getElementById("s").value){
//               document.getElementById("show").innerHTML=data[j].nickname;
//           }
//       }
//   }
}
LoadData();