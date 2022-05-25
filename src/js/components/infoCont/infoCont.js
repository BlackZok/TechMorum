import {generalInfoCont} from "./infoContModel";

const infoCont = document.querySelector('#infoCont');

let infoContHtml = generalInfoCont.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "vbn">

            <p style="font-size: 30px;font-weight: 500;color: white;"> ${a.title} </p>
            ${a.content.map((cont) => `<p style="color:white; text-decoration: none;">${cont.text}</p>`).join(" ")}
            <button style="padding: 5px 10px; font-weight: 500; margin-bottom: 10px;">Бибиб</button>
            <button style="background-color: black; color: white; font-weight: 400; padding: 5px 10px;">Бибхабиб</button>
        </div>
    </div>
    `
}).join(" ");

infoCont.insertAdjacentHTML('beforeend', infoContHtml);


