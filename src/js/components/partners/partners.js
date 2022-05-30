import { generalPartners } from "./partnersModel";

const partners = document.querySelector('#partners');

let partnersHtml = generalPartners.map((a) => {
    return `
    
    <img src="${a.img}" alt="" style="text-align: center; height: 50px; display: inline-block; padding: 0 80px">

    `
}).join(" ");

partners.insertAdjacentHTML('beforeend', partnersHtml);