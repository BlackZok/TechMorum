import {generalUnderline} from "./underlineModel";

const underline = document.querySelector('#underline');

let underlineHtml = generalUnderline.map((a) => {
    return `
    <div class = "footer-underline__info" style="height: 10px;"> 
        <p style=" display: flex; justify-content: center; text-align: center;
        color: rgba(255,255,255, 0.7);" >${a.text}</p>
    </div>
    
    `
}).join(" ");

underline.insertAdjacentHTML('beforeend', underlineHtml);

