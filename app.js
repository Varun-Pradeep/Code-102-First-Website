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