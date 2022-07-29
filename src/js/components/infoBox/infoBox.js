import {generalInfoBox} from "./infoBoxModel";

const infoBox = document.querySelector('#infoBox');

let infoBoxHtml = generalInfoBox.map((a) => {
    return `
    <div class="col-md-4">
    
    <p style="color:white; font-size: 20px; font-weight: 500; margin: 100px -220px 0 0;">${a.text1}</p>

    <div style="text-align:bottom;">
        <p style="color:white; font-size: 20px; font-weight: 500; margin: 0 -220px 0 0">${a.text2}</p>
        <p style="color:white; font-size: 20px; font-weight: 500; margin: 0 -220px 0 0">${a.text3}</p>
        <button data-custom-open="order" class="button button__orange" style=" margin: 100px 0 0 0; padding: 5px 10px; font-weight: 500; margin-bottom: 10px; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Связаться с нами</button>
    </div>
    </div>
    `
}).join(" ");

infoBox.insertAdjacentHTML('beforeend', infoBoxHtml);


