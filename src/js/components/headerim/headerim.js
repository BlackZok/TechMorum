import {generalHeaderim} from "./headerimModel";

const headerim = document.querySelector('#headerim');

let headerimHtml = generalHeaderim.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "bvn">

        <img src="${a.img}" alt="" style=" height: 600px;">
        </div>
    `
}).join(" ");

headerim.insertAdjacentHTML('beforeend', headerimHtml);