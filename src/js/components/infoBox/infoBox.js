import {generalInfoBox} from "./infoBoxModel";

const infoBox = document.querySelector('#infoBox');

let infoBoxHtml = generalInfoBox.map((a) => {
    return `
    <div class="col-md-7">
    

    <div style="display: grid; align-items: end; height: 250px;">
        <p style="color:white; font-weight: 500;">${a.text1}</p>
     
    </div>


    <div style="display: flex; align-items: flex-end; height: 350px;">
        <button data-custom-open="order" class="button button__orange" style="  font-weight: 500; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Связаться с нами</button>
    </div>
    `
}).join(" ");

infoBox.insertAdjacentHTML('beforeend', infoBoxHtml);


