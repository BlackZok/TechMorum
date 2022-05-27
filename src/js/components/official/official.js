import {generalOfficial} from "./officialModel";

const official = document.querySelector('#official');

let officialHtml = generalOfficial.map((a) => {
    return `
    
        <div class="footer-img" >
        
            <img src="${a.img}" alt="" style =" height: 50px; padding: 0 0 10px; display: flex; justify-content: center; text-align: center;">

            <p style=" display: flex; justify-content: center; text-align: center;
            color: rgba(255,255,255, 0.7); font-size: 16px; font-weight: 300;"> ${a.text} </p>

        </div>
    
    `
}).join(" ");

official.insertAdjacentHTML('beforeend', officialHtml);

