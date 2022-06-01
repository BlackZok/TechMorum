import { generalBanner } from "./bannerModel";

const banner = document.querySelector('#banner');

let bannerHtml = generalBanner.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button class="banner__button button__orange button">${a.text}</button>
    </div>
    `
}).join(" ");

banner.insertAdjacentHTML('beforeend', bannerHtml);