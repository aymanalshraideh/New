let azkar = document.getElementById("azkar");
let des = document.getElementById("des");
function sapah() {

    let x = new XMLHttpRequest();
    x.open("GET", "azkar.json");
    x.onload = function () {
        let data = JSON.parse(x.responseText);
        s = "أذكار الصباح";
       
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} عدد</h5> <h4>${data[i].description}</h4><br> المرجع  <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
    }
    x.send();
}

function masaa() {

    let x = new XMLHttpRequest();
    x.open("GET", "azkar.json");
    x.onload = function () {
        let data = JSON.parse(x.responseText);
        s = "أذكار المساء";
      
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} عدد</h5> <h4>${data[i].description}</h4><br> المرجع  <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
    }
    x.send();
}
function noom(){
    let x=new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data =JSON.parse(x.responseText);
        s="أذكار الاستيقاظ من النوم";
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br> المرجع  <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
    }
    x.send();
}
function jded(){
    let x=new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data =JSON.parse(x.responseText);
        s="دعاء لبس الثوب";
        ss="دعاء لبس الثوب الجديد"
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s||data[i].category == ss) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br> المرجع  <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
    }
    x.send();
}