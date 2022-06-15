import {generalHeaderim} from "./headerimModel";

const headerim = document.querySelector('#headerim');

let headerimHtml = generalHeaderim.map((a) => {
    return `
        <div class = "hedrim">

        <img src="${a.img}" width="1100">
        </div>
    `
}).join(" ");

headerim.insertAdjacentHTML('beforeend', headerimHtml);