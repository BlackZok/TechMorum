import { generalMezhinfo } from "./mezhinfoModel";

const mezhinfo = document.querySelector('#mezhinfo');

let mezhinfoHtml = generalMezhinfo.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "qwe" style="height: 100%; width: 100%; align-items: center;">

            <p style=" display: flex; justify-content: center; text-align: center;
            padding: 25px 0 25px; color: white; font-size: 24px; font-weight: 700;"> ${a.title} </p>

                <img src="${a.img}" alt="" style=" display: flex; text-align: center;
                padding: 25px 0 25px; height: 400px;">
            
                <div class="qwe" style=" display: flex; justify-content: center; text-align: center;">
                
                    <p style=" display: flex; justify-content: center; text-align: center;
                    color: ; font-size: 16px; font-weight: 600; padding: 0 10px 0 10px;
                    border-color: orange; border-radius: 5px;"> ${a.text} </p>
                
                </div>
        </div>
    </div>

    `
}).join(" ");

mezhinfo.insertAdjacentHTML('beforeend', mezhinfoHtml);