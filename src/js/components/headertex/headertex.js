import {generalHeadertex} from "./headertexModel";

const headertex = document.querySelector('#headertex');

let headertexHtml = generalHeadertex.map((a) => {
    return `
    <div class="col-md-4">  
        <div class = "vbn">

            <p style="font-size: 50px;font-weight: 1000;color: white; margin: -20px 0px 0px 0px"> ${a.title} </p>
            <p style="font-size: 50px;font-weight: 1000;color: #FF7C00; margin: -20px 0px 0px 0px"> ${a.titlle} </p>
            <p style="font-size: 50px;font-weight: 1000;color: white; margin: -20px 0px 20px 0px"> ${a.titllle} </p>
            ${a.content.map((cont) => `<p style="color: white; font-size: 16px; font-weight: 500; width: 500px;">${cont.text}</p>`).join(" ")}
            <button style="background-color: #FF7C00; color: black; font-weight: 600; font-size: 20px; margin-top: 50px; padding: 5px 10px; border: transparent; border-radius: 5px">${a.text}</button>
        </div>
    </div>
    `
}).join(" ");

headertex.insertAdjacentHTML('beforeend', headertexHtml);