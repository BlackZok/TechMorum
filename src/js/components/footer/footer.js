import {generalFooter} from "./footerModel";

const footer = document.querySelector('#footer');
const navigation = ( id ) => {
    console.log(id)
    switch (id) {
        case 0:
            return 'general_top';
        case 1:
            return 'our_poducts';
        case 2:
            return 'about_us';
        default:
            return ''; 
   }

}

let footerHtml = generalFooter.map((a) => {
    return `
    <div class="col-md-4" style="margin: 10px 0;">
            <h3 class="home-footer__title" style = "color: rgba(255,255,255, 0.7); border-bottom: 1px solid rgba(255,255,255, 0.7);">
                ${a.title}
             </h3>
            <ul class="home-footer__list">
                ${a.content.map(e => `
                    <li class="home-footer__item"> <a href="#${navigation(e.id)}" style = "color: rgba(255,255,255, 0.7); line-height: 2;"> ${e.text} </a></li>
                `).join(' ')}
            </ul>
        </div>
    </div>
    ` /*Magic code, don't touch*/
}).join(" ");

footer.insertAdjacentHTML('beforeend', footerHtml);
