import { generalBanner } from "./bannerModel";

const banner = document.querySelector('#banner');

let bannerHtml = generalBanner.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "qwe">
        <p style=" display: flex; justify-content: center; padding: 50px 0 50px; color: black; font-size: 24px; font-weight: 700;"> ${a.title} </p>
            <img src="${a.img}" alt="">
           
            <p> ${a.text} </P>

        </div>
    </div>
    
    <div class="col-md-4">
    <div class = "qwe">
        <p> ${a.title} </p>
        <img src="${a.img}" alt="">
        <p> ${a.text} </P>

    </div>
</div>

<div class="col-md-4">
<div class = "qwe">
    <p> ${a.title} </p>
    <img src="${a.img}" alt="">
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