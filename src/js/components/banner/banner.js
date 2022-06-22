import { generalBannerLeft } from "./bannerModel";
import { generalBannerMid } from "./bannerModel";
import { generalBannerRight } from "./bannerModel";

const banner = document.querySelector('#banner');

let bannerHtmlLeft = generalBannerLeft.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");

let bannerHtmlMid = generalBannerMid.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");

let bannerHtmlMidRight = generalBannerRight.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");

banner.insertAdjacentHTML('beforeend', bannerHtmlLeft);
banner.insertAdjacentHTML('beforeend', bannerHtmlMid);
banner.insertAdjacentHTML('beforeend', bannerHtmlMidRight);