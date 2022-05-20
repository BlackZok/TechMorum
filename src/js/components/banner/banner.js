import {generalBanner} from "./bannerModel";

const banner = document.querySelector('#banner');

let bannerHtml = generalBanner.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "qwe">
            <img src="${a.img}" alt="">
            <p> ${a.title} </p>
            <p> ${a.text} </P>

        </div>
    </div>
    
    <div class="col-md-4">
    <div class = "qwe">
        <img src="${a.img}" alt="">
        <p> ${a.title} </p>
        <p> ${a.text} </P>

    </div>
</div>

<div class="col-md-4">
<div class = "qwe">
    <img src="${a.img}" alt="">
    <p> ${a.title} </p>
    <p> ${a.text} </P>

</div>
</div>

<div class="col-md-12">
        <div class = "qwe">

            <p> ${a.text} </P>

        </div>
    `
}).join(" ");

banner.insertAdjacentHTML('beforeend', bannerHtml);


