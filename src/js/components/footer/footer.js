import {generalFooter} from "./footerModel";

const footer = document.querySelector('#footer');

let footerHtml = generalFooter.map((a) => {
    return `
    <div class="col-md-4" style="margin: 10px 0;">
            <h3 class="home-footer__title"><a style = "color: rgba(255,255,255, 0.7);
             border-bottom: 1px solid rgba(255,255,255, 0.7);">${a.title}</h3>
            <ul class="home-footer__list">
                <li class="home-footer__item">
                <a href="#" style = "color: rgba(255,255,255, 0.7); line-height: 2;">${a.content.map((cont) => `<li style = "list-style-type: none;">${cont.text}</li>`).join(" ")}</a></li>
            </ul>
        </div>
    </div>
    ` /*Magic code, don't touch*/
}).join(" ");

footer.insertAdjacentHTML('beforeend', footerHtml);