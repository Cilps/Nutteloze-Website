function hide_marquee_h3() {
    document.getElementById("marquee_h3").style.opacity = "0";
}
function show_marquee_h3() {
    document.getElementById("marquee_h3").style.opacity = "1";
}
var color_input = document.getElementById("color_input");

color_input.addEventListener("input", function () {
    var color = color_input.value;
    document.body.style.backgroundColor = color;
    const collection = document.getElementsByClassName("text");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = invertColor(color);
    }
}, false);


//#region gestolen functie
//https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
//#endregion