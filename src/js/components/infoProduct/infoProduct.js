import {generalInfoProduct} from "./infoProductModel";

const infoProduct = document.querySelector('#infoProduct');

let infoProductHtml = generalInfoProduct.map((a) => {
    return `
    <div class="col-md-7">
        <div class = "infoprod" style = "display: flex; align-items: flex-end; height: 250px; ">

            <p style="color:white;  font-weight: 500;">${a.text1}</p>

        </div>

        
    </div>

    <div style="display: flex; align-items: flex-end; height: 350px;">
             <p style="color:white; font-weight: 500;">${a.text2}</p>
    </div>
    <div style="padding: 10px; height: 100px;">
            <button data-custom-open="order" class="button button__orange" style="  font-weight: 500; background-color: #FF7C00; border: transparent; border-radius: 5px; color: white;">Связаться с нами</button>
    </div>
    `
}).join(" ");

infoProduct.insertAdjacentHTML('beforeend', infoProductHtml);


