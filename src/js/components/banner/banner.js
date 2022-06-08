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
        <button class="banner__button" style="background-color: #FF7C00; color: black;
         font-weight: 600; font-size: 20px; margin-top: 50px; padding: 5px 10px; border: transparent; border-radius: 5px">${a.text}</button>
    </div>
    `
}).join(" ");

let bannerHtmlMid = generalBannerMid.map((a) => {
    return `
    <div class="col-md-4 banner__card" style = "border-left: 1px solid #FF7C00; border-right: 1px solid #FF7C00;">
        <p class="banner__title">${a.title}</p>
        <div class="banner__img">
            <img class="image" src="${a.img}" alt="photo" />
        </div>
        <button class="banner__button" style="background-color: #FF7C00; color: black;
         font-weight: 600; font-size: 20px; margin-top: 50px; padding: 5px 10px; border: transparent; border-radius: 5px">${a.text}</button>
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
        <button class="banner__button" style="background-color: #FF7C00; color: black;
         font-weight: 600; font-size: 20px; margin-top: 50px; padding: 5px 10px; border: transparent; border-radius: 5px">${a.text}</button>
    </div>
    `
}).join(" ");

banner.insertAdjacentHTML('beforeend', bannerHtmlLeft);
banner.insertAdjacentHTML('beforeend', bannerHtmlMid);
banner.insertAdjacentHTML('beforeend', bannerHtmlMidRight);