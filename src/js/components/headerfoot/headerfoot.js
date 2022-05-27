import {generalHeaderfoot} from "./headerfootModel";

const headerfoot = document.querySelector('#headerfoot');

let headerfootHtml = generalHeaderfoot.map((a) => {
    return `
    <div class="header__footer">
    <div class="container">
        <div class="row">
        <div class="col-md-4">
        <p> ${a.text} </p>
        <div>
        <div>        
        <div>
    <div>
    `
}).join(" ");

headerfoot.insertAdjacentHTML('beforeend', headerfootHtml);