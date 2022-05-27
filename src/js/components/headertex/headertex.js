import {generalHeadertex} from "./headertexModel";

const headertex = document.querySelector('#headertex');

let headertexHtml = generalHeadertex.map((a) => {
    return `
    <div class="col-md-4">  
        <div class = "vbn">

            <p style="font-size: 30px;font-weight: 1000;color: black;"> ${a.title} </p>
            ${a.content.map((cont) => `<p style="color: black; font-weight: 500;">${cont.text}</p>`).join(" ")}
            <button style="background-color: black; color: white; font-weight: 400; padding: 5px 10px;">Бибхабиб</button>
        </div>
    </div>
    `
}).join(" ");

headertex.insertAdjacentHTML('beforeend', headertexHtml);