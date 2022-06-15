import {generalHeaderText} from "./headertexModel";

const headertext = document.querySelector('#headertext');

let headertextHtml = generalHeaderText.map((a) => {
  return `
         ${a.title.map(t => `<p class="text text__big"> ${t.text} </p>`).join(' ')}
         ${a.content.map((cont) => `<p class="text text__bold" style="margin-top: 20px">${cont.text}</p>`).join(" ")}
         <div>
            <button class="button button__orange" style="margin: 25px 0">${a.text}</button>
         </div>
    `
}).join(" ");

headertext.insertAdjacentHTML('beforeend', headertextHtml);