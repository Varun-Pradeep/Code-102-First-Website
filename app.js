'use strict';

const root = document.getElementById("root");
const container = document.getElementById("fun-container");

let numTiles = 256;

for (let i = 0; i < (numTiles - 1); i++) {
    let tempNode = root.cloneNode(true);
    tempNode.style.cssText += ` --index: ${i + 1};`;
    container.appendChild(tempNode);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUsername() {
    if (getCookie('username') !== '') {
        username = getCookie('username');
    } else {
        username = prompt("What's your name?");
        let descision = prompt("Want a cookie?(y/n)");

        while (descision !== "y" && descision !== "n") {
            descision = prompt("You can only type \'y\' or \'n\'!");
        }

        if (descision === "y") {
            alert("Great!");
        } else {
            alert("Too bad. Have a cookie anyway.");
        }

        document.cookie = `username=${username}`;
    }
}

let username;

getUsername();

let messageElement = document.getElementById("message");
messageElement.innerHTML = username + ", a cookie has been placed on your system.";

let interval = 417;
let waveDuration = 2000;
let HTMLroot = document.documentElement;

document.addEventListener("keydown", function (event) {
    if (event.key == 'ArrowLeft') {
        interval--;
    } else if (event.key == 'ArrowRight') {
        interval++;
    } else if (event.key == 'w') {
        waveDuration += 5;
    } else if (event.key == 's') {
        waveDuration -= 5;
    }
    HTMLroot.style.setProperty('--interval', interval + 'ms');
    HTMLroot.style.setProperty('--wave-duration', waveDuration + 'ms');
});