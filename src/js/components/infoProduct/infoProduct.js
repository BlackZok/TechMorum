import {generalInfoProduct} from "./infoProductModel";

const infoProduct = document.querySelector('#infoProduct');

let infoProductHtml = generalInfoProduct.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "infoprod">

            <p class="text text__big"> ${a.title} </p>
            ${a.content.map((cont) => `<p style="color:white; font-size: 16px; font-weight: 500;">${cont.text}</p>`).join(" ")}
            <button class="button button__orange" style="padding: 5px 10px; font-weight: 500; margin-bottom: 10px; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Заказать</button>
            <button class="button button__orange" style=" color: white; font-weight: 400; padding: 400px 10px; background-color: transparent; border: transparent;">Узнать цены</button>
        </div>
    </div>
    `
}).join(" ");

infoProduct.insertAdjacentHTML('beforeend', infoProductHtml);


