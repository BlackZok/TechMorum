import {generalInformation} from "./infoTeamModel";

const infoTeam = document.querySelector('#info-team');

let infoTeamHtml = generalInformation.map((a) => {
    return `
    <div class="col-md-6">
        <div class = "qwe">

            <img src="${a.img}" alt="">

        </div>
    </div>
    
    <div class="col-md-6">
        <div class = "zxc">

           <p> ${a.text} </p>
            
        </div>
    </div>
    `
}).join(" ");

infoTeam.insertAdjacentHTML('beforeend', infoTeamHtml);




