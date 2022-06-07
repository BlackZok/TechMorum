import { generalBanner } from "./bannerModel";

const banner = document.querySelector('#banner');

let bannerHtml = generalBanner.map((a) => {
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

banner.insertAdjacentHTML('beforeend', bannerHtml);