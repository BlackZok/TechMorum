import {generalHeaderfoot} from "./headerfootModel";

const headerfoot = document.querySelector('#headerfoot');

let headerfootHtml = generalHeaderfoot.map((a) => {
    return `

                <p style="text-align: center; display: inline-block; padding: 0 70px 0px 0px; color: white; margin: 0px 20px 0px 80px"> ${a.text} </p>
    `
}).join(" ");

headerfoot.insertAdjacentHTML('beforeend', headerfootHtml);