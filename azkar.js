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
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} عدد</h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
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
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} عدد</h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
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
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
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
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
    }
    x.send();
}

function khalaa(){
    let x=new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data =JSON.parse(x.responseText);
        s="دعاء دخول الخلاء - الحمام";
        ss="دعاء الخروج من الخلاء - الحمام";
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
      
    }
    x.send();
}
function outkhalaa(){
    let x=new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data =JSON.parse(x.responseText);
        
        s="دعاء الخروج من الخلاء - الحمام";
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
      
    }
    x.send();
}
function wodo(){
    let x=new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data =JSON.parse(x.responseText);
        
        s="الذكر قبل الوضوء";
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category
            }
        }
      
    }
    x.send();
}
function outwodo(){
    let x=new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data =JSON.parse(x.responseText);
        
        s="الذكر بعد الفراغ من الوضوء";
        azkar.innerHTML = "";
        des.innerHTML = "";
        let j = 1;
        for (let i = 0; i < data.length; i++) {

            if (data[i].category == s) {
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
      
    }
    x.send();
}
function onhome(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="الذكر عند دخول المنزل";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function outhome(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="الذكر عند الخروج من المنزل";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function gomsjed(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء الذهاب إلى المسجد";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function inmsjed(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء دخول المسجد";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function outmsjed(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء الخروج من المسجد";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function azan(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="أذكار الآذان";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function estftah(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء الاستفتاح";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function rekoo(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء الركوع";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}

function uprekoo(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء الرفع من الركوع";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}

function sujood(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء السجود";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}

function upsujood(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء الجلسة بين السجدتين";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function salatsujood(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="دعاء سجود التلاوة";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function tashahod(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="التشهد";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function salattashahod(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="الصلاة على النبي بعد التشهد";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br>   <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}

function doaatashahod(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="الدعاء بعد التشهد الأخير قبل السلام";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br> <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}
function aftersalat(){
    let x= new XMLHttpRequest();
    x.open("GET","azkar.json")
    x.onload=function(){
        let data=JSON.parse(x.responseText);
        s="الأذكار بعد السلام من الصلاة";
        azkar.innerHTML="";
        des.innerHTML="";
        let j=1;
        for(let i=0;i<data.length;i++){
            if(data[i].category==s){
                azkar.innerHTML += `<h3>-${j}</h3><div class="zekr"> <h2> ${data[i].zekr}</h2></div><h5>${data[i].count} </h5> <h4>${data[i].description}</h4><br> <h4>${data[i].reference}</h4> `
                j++
                des.innerHTML = data[i].category;
            }
        }
    }
    x.send();
}