import {generalInfoBox} from "./infoBoxModel";

const infoBox = document.querySelector('#infoBox');

let infoBoxHtml = generalInfoBox.map((a) => {
    return `
    <div class="col-md-4">
        <p class="text text__big" style="line-height: normal">${a.title}</p>
        ${a.content.map((cont) => `<p style="color:white; font-size: 16px; font-weight: 500; margin-top: 20px; text-decoration: none;">${cont.text}</p>`).join(" ")}
        <button style="padding: 5px 10px; font-weight: 500; margin-bottom: 10px; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Заказать</button>
        <button style=" color: white; font-weight: 400; padding: 200px 10px; background-color: transparent; border: transparent;">Узнать цены</button>
    </div>
    `
}).join(" ");

infoBox.insertAdjacentHTML('beforeend', infoBoxHtml);


