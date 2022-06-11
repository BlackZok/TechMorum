import { generalMezhinfo } from "./mezhinfoModel";

const mezhinfoTop = document.querySelector('#mezhinfoTop');
const mezhinfoMid = document.querySelector('#mezhinfoMid');
const mezhinfoBot = document.querySelector('#mezhinfoBot');

let mezinfoHtmlTop = generalMezhinfo.map((a) => {
    return `
    <div class="col-md-4 mezinfo__card">
        <div class="mezinfo__img">
            <img class="image" src="${a.imgTop}" alt="photo" />
        </div>
        <p class="mezinfo__text"  style = "color: white; display: flex; text-align: center; justify-content: center; font-size: 16px; font-weight: 500; padding: 25px;">${a.textTop}</p>
    </div>
    `
}).join(" ");

let mezinfoHtmlMid = generalMezhinfo.map((a) => {
    return `
    <div class="col-md-4 mezinfo__card" >
        <div class="mezinfo__img">
            <img class="image" src="${a.imgMid}" alt="photo" />
        </div>
        <p class="mezinfo__text" style = "color: white; display: flex; text-align: center; justify-content: center; font-size: 16px; font-weight: 500; padding: 25px;">${a.textMid}</p>
    </div>
    `
}).join(" ");

let mezinfoHtmlBot = generalMezhinfo.map((a) => {
    return `
    <div class="col-md-4 mezinfo__card">
        <div class="mezinfo__img">
            <img class="image" src="${a.imgBot}" alt="photo" />
        </div>
        <p class="mezinfo__text" style = "color: white; display: flex; text-align: center; justify-content: center; font-size: 16px; font-weight: 500; padding: 25px;">${a.textBot}</p>
    </div>
    `
}).join(" ");

mezhinfoTop.insertAdjacentHTML('beforeend', mezinfoHtmlTop);
mezhinfoMid.insertAdjacentHTML('beforeend', mezinfoHtmlMid);
mezhinfoBot.insertAdjacentHTML('beforeend', mezinfoHtmlBot);