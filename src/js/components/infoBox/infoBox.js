import {generalInfoBox} from "./infoBoxModel";

const infoBox = document.querySelector('#infoBox');

let infoBoxHtml = generalInfoBox.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "xgv">

            <p style="font-size: 30px;font-weight: 500;color: white;"> ${a.title} </p>
            ${a.content.map((cont) => `<p style="color:white; text-decoration: none;">${cont.text}</p>`).join(" ")}
            <button style="padding: 5px 10px; font-weight: 500; margin-bottom: 10px; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Заказать</button>
            <button style=" color: white; font-weight: 400; padding: 350px 10px; background-color: transparent; border: transparent;">Узнать цены</button>
        </div>
    </div>
    `
}).join(" ");

infoBox.insertAdjacentHTML('beforeend', infoBoxHtml);


