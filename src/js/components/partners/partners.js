import { generalPartners } from "./partnersModel";

const partners = document.querySelector('#partners');

let partnersHtml = generalPartners.map((a) => {
    return `
    
    <img src="${a.img}" alt="" style=" display: flex; text-align: center;
                padding: 25px 0 25px; height: 50px; display: inline-block; padding: 0 80px">

    `
}).join(" ");

partners.insertAdjacentHTML('beforeend', partnersHtml);