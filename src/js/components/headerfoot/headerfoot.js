import {generalHeaderfoot} from "./headerfootModel";

const header__footer = document.querySelector('#header__footer');

let headerfooterHtml = generalHeaderfoot.map((a) => {
    return `
        <div class="col-md-3">
             <p class="text" style="margin-bottom: 20px"> ${a.text} </p>
        </div>
    `
}).join(" ");

header__footer.insertAdjacentHTML('beforeend', headerfooterHtml);