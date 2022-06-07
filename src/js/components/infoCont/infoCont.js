import {generalInfoCont} from "./infoContModel";

const infoCont = document.querySelector('#infoCont');

let infoContHtml = generalInfoCont.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "vbn">

            <p style="font-size: 50px; font-weight: 1000; color: white; line-height: 0.9em; padding-bottom: 50px;"> ${a.title} </p>
            ${a.content.map((cont) => `<p style="color:white; font-size: 16px; font-weight: 500; width: 400px; text-decoration: none;">${cont.text}</p>`).join(" ")}
            <button style="padding: 5px 10px; font-weight: 500; margin-bottom: 10px; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Заказать</button>
            <button style=" color: white; font-weight: 400; padding: 100px 10px; background-color: transparent; border: transparent;">Узнать цены</button>
        </div>
    </div>
    `
}).join(" ");

infoCont.insertAdjacentHTML('beforeend', infoContHtml);


