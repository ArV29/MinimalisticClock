const hOne = document.querySelector("[h-one]");
const mOne = document.querySelector("[m-one]");
const sOne = document.querySelector("[s-one]");
const hTen = document.querySelector("[h-ten]");
const mTen = document.querySelector("[m-ten]");
const sTen = document.querySelector("[s-ten]");

setInterval(setClock, 1);
var second = 0;
var kSo = 0
var kST = 0
var kMO = 0
var kMT = 0
var kHO = 0
var kHT = 0

function setClock() {

    const currentTime = new Date();
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours() % 12;
    var ms = currentTime.getMilliseconds() % 1000;


    if (ms >= 810) {
        if (((1000 - ms) % 5) == 0) {
            if (seconds % 10 == 9) {
                if (Math.floor(seconds / 10) == 5) {
                    kMO++
                    document.querySelector('[cover-m-one]').style.setProperty('background-color', "rgba(200, 200, 200, " + (38 - (1000 - ms) / 5) + "%)")

                    if (minutes % 10 == 9) {
                        kMT++
                        document.querySelector('[cover-k-ten]').style.setProperty('background-color', "rgba(200, 200, 200, " + (38 - (1000 - ms) / 5) + "%)")

                        if (Math.floor(minutes / 10) == 5) {
                            kHO++
                            document.querySelector('[cover-h-one]').style.setProperty('background-color', "rgba(200, 200, 200, " + (38 - (1000 - ms) / 5) + "%)")

                            if (hour % 10 == 9) {
                                kHT++
                                document.querySelector('[cover-h-ten]').style.setProperty('background-color', "rgba(200, 200, 200, " + (38 - (1000 - ms) / 5) + "%)")

                            } else {
                                kHT = 0
                            }
                        } else {
                            kHO = 0
                        }
                    } else {
                        kMT = 0
                    }
                } else {
                    kMO = 0
                }
                kST    ++;
                document.querySelector('[cover-s-ten]').style.setProperty('background-color', "rgba(200, 200, 200, " + (38 - (1000 - ms) / 5) + "%)")

            } else {
                kST = 0
            }
            kSO++;

            document.querySelector('[cover-s-one]').style.setProperty('background-color', "rgba(200, 200, 200, " + (38 - (1000 - ms) / 5) + "%)")

        }
    }
    if (ms >= 500) {
        if (ms % 5 == 0) {

        }
    } else {
        kSO = 0;
        kST = 0;
        kMO = 0
    }







    sOne.style.setProperty("--move", (seconds % 10) * 38 + kSO);

    mOne.style.setProperty("--move", (minutes % 10) * 38 + kMO);

    hOne.style.setProperty("--move", (hours % 10) * 38 + kHO);

    hTen.style.setProperty("--move", Math.floor(hours / 10) * 38 + kHT);

    mTen.style.setProperty("--move", Math.floor(minutes / 10) * 38 + kMT);

    sTen.style.setProperty("--move", Math.floor(seconds / 10) * 38 + kST);

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