import {generalUnderline} from "./underlineModel";

const underline = document.querySelector('#underline');

let underlineHtml = generalUnderline.map((a) => {
    return `
    <div class = "footer-underline__info"> 
        <p style="color: rgba(255,255,255, 0.7);" >${a.text}</p>
    </div>
    
    `
}).join(" ");

underline.insertAdjacentHTML('beforeend', underlineHtml);

