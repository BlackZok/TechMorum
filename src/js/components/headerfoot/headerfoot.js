import {generalHeaderfoot} from "./headerfootModel";

const headerfoot = document.querySelector('#headerfoot');

let headerfootHtml = generalHeaderfoot.map((a) => {
    return `
    <div class="header__footer">
    <img src="${a.img}" alt="" style=" height: 600px;">
    `
}).join(" ");

headerfoot.insertAdjacentHTML('beforeend', headerfootHtml);