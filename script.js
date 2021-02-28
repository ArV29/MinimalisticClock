const hOne = document.querySelector("[h-one]");
const mOne = document.querySelector("[m-one]");
const sOne = document.querySelector("[s-one]");
const hTen = document.querySelector("[h-ten]");
const mTen = document.querySelector("[m-ten]");
const sTen = document.querySelector("[s-ten]");

setInterval(setClock, 1);
var second = 0;
var key = 0
function setClock() {

    const currentTime = new Date();
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours() % 12;
    var ms = currentTime.getMilliseconds()%1000;
    
    if (ms>=780){
        if(((1000-ms)%5) == 0){
            key+=1;
            
            document.querySelector('[cover-s-one]').style.setProperty('background-color', "rgba(200, 200, 200, " + (45 - (1000 - ms) / 5) + "%)")
            
            console.log(document.querySelector('[cover-s-one]').style)
        }
    } 
    if(ms>=500){
        if (ms%5 == 0){

        }
    }
    else{
        key = 0;
    }







    sOne.style.setProperty("--move", (seconds % 10) * 38+key);

    mOne.style.setProperty("--move", (minutes % 10) * 38);

    hOne.style.setProperty("--move", (hours % 10) * 38);

    hTen.style.setProperty("--move", Math.floor(hours / 10) * 38);

    mTen.style.setProperty("--move", Math.floor(minutes / 10) * 38);

    sTen.style.setProperty("--move", Math.floor(seconds / 10) * 38);

    magnify("s", seconds);
    magnify("m", minutes);

    magnify("h", hours);
}

function magnify(type, value) {
    s = "[" + type + "-one-" + (value % 10) + "]";
    document.querySelector(s).style.setProperty("font-size", "40px");
    document.querySelector(s).style.setProperty("color", "black");



    if (value % 10 == 0) {
        document.querySelector("[" + type + "-one-9]").style.setProperty("font-size", "15px");
        document.querySelector("[" + type + "-one-9]").style.setProperty("color", "white");

    } else {
        s = "[" + type + "-one-" + ((value % 10) - 1) + "]";
        document.querySelector(s).style.setProperty("font-size", "15px");
        document.querySelector(s).style.setProperty("color", "white");

    }

    s = "[" + type + "-ten-" + Math.floor(value / 10) + "]";
    document.querySelector(s).style.setProperty("font-size", "40px");
    document.querySelector(s).style.setProperty("color", "black");

    if (Math.floor(value / 10) == 0) {
        if (type == 'h') {
            document.querySelector("[h-ten-1]").style.setProperty("font-size", "15px");
            document.querySelector("[h-ten-1]").style.setProperty("color", "white");

        } else {
            document.querySelector("[" + type + "-ten-5]").style.setProperty("font-size", "15px");
            document.querySelector("[" + type + "-ten-5]").style.setProperty("color", "white");

        }
    } else {
        s = "[" + type + "-ten-" + (Math.floor(value / 10) - 1) + "]";
        document.querySelector(s).style.setProperty("font-size", "15px");

        document.querySelector(s).style.setProperty("color", "white");
    }



}

setClock();