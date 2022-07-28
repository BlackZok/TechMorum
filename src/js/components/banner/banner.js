import { generalBannerLeft } from "./bannerModel";
import { generalBannerMid } from "./bannerModel";
import { generalBannerRight } from "./bannerModel";

import { generalBannerBotLeft } from "./bannerModel";
import { generalBannerBotMid } from "./bannerModel";
import { generalBannerBotRight } from "./bannerModel";

const banner = document.querySelector('#banner');
const bannerBot = document.querySelector('#bannerBot');

let bannerHtmlLeft = generalBannerLeft.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button data-custom-open="oil" class="button button__orange">${a.text}</button>
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
        <button data-custom-open="filters"class="button button__orange">${a.text}</button>
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
        <button data-custom-open="electronic" class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");





let bannerHtmlBotLeft = generalBannerBotLeft.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button data-custom-open="oil" class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");

let bannerHtmlBotMid = generalBannerBotMid.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button data-custom-open="filters"class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");

let bannerHtmlMidBotRight = generalBannerBotRight.map((a) => {
    return `
    <div class="col-md-4 banner__card">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button data-custom-open="electronic" class="button button__orange">${a.text}</button>
    </div>
    `
}).join(" ");

banner.insertAdjacentHTML('beforeend', bannerHtmlLeft);
banner.insertAdjacentHTML('beforeend', bannerHtmlMid);
banner.insertAdjacentHTML('beforeend', bannerHtmlMidRight);

bannerBot.insertAdjacentHTML('beforeend', bannerHtmlBotLeft);
bannerBot.insertAdjacentHTML('beforeend', bannerHtmlBotMid);
bannerBot.insertAdjacentHTML('beforeend', bannerHtmlMidBotRight);
