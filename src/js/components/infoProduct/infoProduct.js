import {generalInfoProduct} from "./infoProductModel";

const infoProduct = document.querySelector('#infoProduct');

let infoProductHtml = generalInfoProduct.map((a) => {
    return `
    <div class="col-md-5">
        <div class = "infoprod">

            <p style="color:white; font-size: 20px; font-weight: 500; margin: 100px -220px 0 0">${a.text1}</p>

            <div style="text-align:bottom;">
                <p style="color:white; font-size: 20px; font-weight: 500; margin: 300px -220px 0 0">${a.text2}</p>
                <button data-custom-open="order" class="button button__orange" style=" margin: 50px 0 0 0; padding: 5px 10px; font-weight: 500; margin-bottom: 10px; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Связаться с нами</button>
            </div>
           
        </div>
    </div>
    `
}).join(" ");

infoProduct.insertAdjacentHTML('beforeend', infoProductHtml);


