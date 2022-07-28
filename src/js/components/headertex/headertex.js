import { generalHeaderText } from "./headertexModel";
import { secondHeaderText } from "./headertexModel";

const headertext = document.querySelector('#header__text');
const secondheadertext = document.querySelector('#header__secondtext');
const headerimg = document.querySelector('#header__img');

let headertextHtml = generalHeaderText.map((a) => {
   return `
         ${a.title.map(t => `<p class="text text__big" style="font-size: 25px;"> ${t.text} </p>`).join(' ')}
         <div>
            <button data-custom-open="order" class="button button__orange" style="padding: 0 25px; margin: 25px 0; color: white">${a.text}</button>
         </div>
    `
}).join(" ");

let headersecondtextHtml = secondHeaderText.map((a) => {
   return `
          <p class="text text__big" style="font-size: 27px;"> ${a.text1} </p>
          <p class="text text__big" style="font-size: 27px;"> ${a.text2} </p>
          <p class="text text__big" style="font-size: 27px;"> ${a.text3} </p>
          
     `
}).join(" ");

headertext.insertAdjacentHTML('beforeend', headertextHtml);
secondheadertext.insertAdjacentHTML('beforeend', headersecondtextHtml);
