import {generalContacts} from "./contactsModel";

const contacts = document.querySelector('#contacts');

let contactsHtml = generalContacts.map((a) => {
    return `
    <div class="col-md-4">
        <div class = "qwe">

            <p> ${a.title} </p>
            <p> ${a.text} </P>

        </div>
    </div>
    
    <div class="col-md-4">
        <div class = "zxc">
        <p> ${a.title} </p>
           <p> ${a.text} </p>
            
        </div>
    </div>

    <div class="col-md-4">
    <div class = "ghj">

       <p> ${a.title} </p>
       <p> ${a.text} </p>
        
    </div>
</div>
    `
}).join(" ");

contacts.insertAdjacentHTML('beforeend', contactsHtml);


