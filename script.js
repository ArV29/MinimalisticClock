const hOne = document.querySelector("[h-one]");
const mOne = document.querySelector("[m-one]");
const sOne = document.querySelector("[s-one]");
const hTen = document.querySelector("[h-ten]");
const mTen = document.querySelector("[m-ten]");
const sTen = document.querySelector("[s-ten]");

setInterval(setClock, 1000);
var second = 0;

function setClock() {
    const currentTime = new Date();
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours() % 12;

    sOne.style.setProperty("--move", (seconds % 10) * 44);

    mOne.style.setProperty("--move", (minutes % 10) * 44);

    hOne.style.setProperty("--move", (hours % 10) * 44);

    hTen.style.setProperty("--move", Math.floor(hours / 10) * 44);

    mTen.style.setProperty("--move", Math.floor(minutes / 10) * 44);
    sTen.style.setProperty("--move", Math.floor(seconds / 10) * 44);
    magnify("s", seconds);
    magnify("m", minutes);

    magnify("h", hours);
}

function magnify(type, value) {
    s = "[" + type + "-one-" + (value % 10) + "]";
    document.querySelector(s).style.setProperty("font-size", "40px");
    document.querySelector(s).style.setProperty("color", "white");



    if (value % 10 == 0) {
        document.querySelector("[" + type + "-one-9]").style.setProperty("font-size", "20px");
        document.querySelector("[" + type + "-one-9]").style.setProperty("color", "black");

    } else {
        s = "[" + type + "-one-" + ((value % 10) - 1) + "]";
        document.querySelector(s).style.setProperty("font-size", "20px");
        document.querySelector(s).style.setProperty("color", "black");

    }

    s = "[" + type + "-ten-" + Math.floor(value / 10) + "]";
    document.querySelector(s).style.setProperty("font-size", "40px");
    document.querySelector(s).style.setProperty("color", "white");

    if (Math.floor(value / 10) == 0) {
        if (type == 'h') {
            document.querySelector("[h-ten-1]").style.setProperty("font-size", "20px");
            document.querySelector("[h-ten-1]").style.setProperty("color", "black");

        } else {
            document.querySelector("[" + type + "-ten-5]").style.setProperty("font-size", "20px");
            document.querySelector("[" + type + "-ten-5]").style.setProperty("color", "black");

        }
    } else {
        s = "[" + type + "-ten-" + (Math.floor(value / 10) - 1) + "]";
        document.querySelector(s).style.setProperty("font-size", "20px");

        document.querySelector(s).style.setProperty("color", "black");
    }



}

setClock();