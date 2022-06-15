'use strict';

const root = document.getElementById("root");
const container = document.getElementById("fun-container");

let numTiles = 100;
let tiles = new Array(numTiles);

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

let username;

if (getCookie('username') != '') {
    username = getCookie('username');
} else {
    username = prompt("What's your name?");
    let descision = prompt("Want a cookie?(y/n)");

    while (descision != "y" && descision != "n") {
        descision = prompt("You can only type \'y\' or \'n\'!");
    }

    if (descision == "y") {
        alert("Great!");
    } else {
        alert("Too bad. Have a cookie anyway.");
    }

    document.cookie = `username=${username}`;
}

let messageElement = document.getElementById("message");
messageElement.innerHTML = username + ", a cookie has been placed on your system.";