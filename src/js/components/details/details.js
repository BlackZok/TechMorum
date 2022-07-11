import {generalDetailsOil} from "./detailsModel";

const details = document.querySelector('#details');

let detailsHtml = generalDetailsOil.map((a) => {
    return `
    <div class="col-md-4">
        <p class="text text__big" style="line-height: normal">${a.text}</p>
        
    </div>
    `
}).join(" ");

details.insertAdjacentHTML('beforeend', detailsHtml);


