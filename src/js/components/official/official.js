import {generalOfficial} from "./officialModel";

const official = document.querySelector('#official');

let officialHtml = generalOfficial.map((a) => {
    return `
    
        <div class="footer-img" >
            <img src="${a.img}" alt="logo">
            <p style="color: rgba(255,255,255, 0.7); font-weight: 300;"> ${a.text} </p>
        </div>
    `
}).join(" ");

official.insertAdjacentHTML('beforeend', officialHtml);

