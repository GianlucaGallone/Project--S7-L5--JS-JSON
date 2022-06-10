// Generare 2 card iniziali con i dati fetchati da json
// Aggiungere Button che aggiunge card vuote

const field = document.querySelector('.field_1');
const cont = document.querySelector('.cardCont'); 

//#region  ---------- Generazione 2 Card all'avvio ------------

fetch('users.json')
.then(res => res.json())
.then(function(data) {      // data contiene i dati fetchati dal json
    data.forEach((ele) => { // ele riporta tutti gli array presenti nel json. Per ogni array presente, crea div e lo popola con i dettagli (primo array, poi secondo)

        /* --------- Contenitore Img/Info ---------- */

        let cardCont = document.createElement('div');
        cardCont.className = 'cardCont';
        
        /* -------------- Image div ---------------- */

        let imgDiv = document.createElement('div');
        imgDiv.className = 'img';
        
        imgDiv.innerHTML = '<img src=" '+ ele.profileURL +' ">'
        field.appendChild(cardCont).appendChild(imgDiv);
        
        /* -------------- Info div ---------------- */

        let info = document.createElement('div');  // div contenitore delle info
        info.className = 'info';
        field.appendChild(cardCont).appendChild(info);

        let name_p = document.createElement('p');           // creo p per ogni elemento da inserire
        name_p.innerHTML = `${'<b>Name:</b>'} ${ele.firstName}`;   // accedo agli elementi cont nel json
        info.appendChild(name_p);

        let surname_p = document.createElement('p');
        surname_p.innerHTML = `${'<b>Last Name:</b>'} ${ele.lastName}`;
        info.appendChild(surname_p);

        let gender_p = document.createElement('p');
        gender_p.innerHTML = `${'<b>Gender:</b>'} ${ele.gender}`;
        info.appendChild(gender_p);

        let email_p = document.createElement('p');
        email_p.innerHTML = `${'<b>Email:</b>'} ${ele.email}`;
        info.appendChild(email_p);
    });
})

//#endregion

//#region  ------------------ Button Add Card ------------------

let btnAdd = document.createElement('button');
btnAdd.className = 'btnAdd';
btnAdd.innerHTML = 'ADD CARD...'

btnAdd.onclick = function() {

    fetch('newuser.json')    
    .then(res => res.json()) 
    .then(function(data) {     
    data.forEach((ele) => {

        /* --------- Contenitore Img/Info ---------- */

        let cardCont = document.createElement('div');
        cardCont.className = 'cardCont';
        
        /* -------------- Image div ---------------- */

        let imgDiv = document.createElement('div');
        imgDiv.className = 'img';
        
        imgDiv.innerHTML = '<img src=" '+ ele.profileURL +' ">'
        field.appendChild(cardCont).appendChild(imgDiv);
        
        /* -------------- Info div ---------------- */

        let info = document.createElement('div');  
        info.className = 'info';
        field.appendChild(cardCont).appendChild(info);

        let name_p = document.createElement('p');          
        name_p.innerHTML = `${'<b>Name:</b>'} ${ele.firstName}`;  
        info.appendChild(name_p);

        let surname_p = document.createElement('p');
        surname_p.innerHTML = `${'<b>Last Name:</b>'} ${ele.lastName}`;
        info.appendChild(surname_p);

        let gender_p = document.createElement('p');
        gender_p.innerHTML = `${'<b>Gender:</b>'} ${ele.gender}`;
        info.appendChild(gender_p);

        let email_p = document.createElement('p');
        email_p.innerHTML = `${'<b>Email:</b>'} ${ele.email}`;
        info.appendChild(email_p);

        });
    })
}

field.appendChild(btnAdd);

//#endregion
