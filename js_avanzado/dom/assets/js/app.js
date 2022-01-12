let title = document.getElementById('title');

console.log(title);
title.textContent='Este texto esta escrito en Javascript';

let parrafos=document.getElementsByTagName('p');
console.log(parrafos);
// parrafos[0].textContent='Este texto esta escrito en Javascript';
// parrafos[1].textContent='Este texto pertenec al segundo parrafo';

// for (let i = 0; i < parrafos.length; i++) {
//     parrafos[i].textContent = 'Parrafo ' + [i] + ' escrito desde Javascript';
    
// }

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);    
}
