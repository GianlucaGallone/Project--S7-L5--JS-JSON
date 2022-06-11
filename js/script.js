// Generare 2 card iniziali con i dati fetchati da json
// Aggiungere Button che aggiunge card vuote, con input da scrivere e stampare nella card
// Button che rimuove la prima Card

const btnField = document.querySelector('.btnField');
const field = document.querySelector('.field_1');
const cont = document.querySelector('.cardCont'); 

//#region  ---------- Generazione 2 Card di Esempio all'avvio ------------

fetch('users.json')
.then(res => res.json())    // json parse
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

        let info = document.createElement('div');                // div contenitore delle info
        info.className = 'info';
        field.appendChild(cardCont).appendChild(info);

        let nameP = document.createElement('p');                // creo p per ogni elemento da inserire
        nameP.innerHTML = `${'<b>Name:</b>'} ${ele.firstName}`; // accedo agli elementi cont nel json
        info.appendChild(nameP);

        let surnameP = document.createElement('p');
        surnameP.innerHTML = `${'<b>Last Name:</b>'} ${ele.lastName}`;
        info.appendChild(surnameP);

        let genderP = document.createElement('p');
        genderP.innerHTML = `${'<b>Gender:</b>'} ${ele.gender}`;
        info.appendChild(genderP);

        let emailP = document.createElement('p');
        emailP.innerHTML = `${'<b>Email:</b>'} ${ele.email}`;
        info.appendChild(emailP);
    });
})

//#endregion

//#region  ------------------ Button Add Card ------------------

let btnAdd = document.createElement('button');
btnAdd.className = 'btnAdd';
btnAdd.innerHTML = 'ADD CARD...';
btnField.appendChild(btnAdd);
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
        imgDiv.className = 'imgDiv';
        field.appendChild(cardCont).appendChild(imgDiv);

        let maleDiv = document.createElement('div');
        maleDiv.className = 'maleDiv';
        maleDiv.innerHTML = '<b>Select Male Avatar</b>';
        maleDiv.onclick = function() {
            imgDiv.innerHTML = '<img src=" '+ ele.maleProfileURL +' ">'
        }
        imgDiv.appendChild(maleDiv);

        let femaleDiv = document.createElement('div');
        femaleDiv.className = 'femaleDiv';
        femaleDiv.innerHTML = '<b>Select Female Avatar</b>';
        femaleDiv.onclick = function() {
            imgDiv.innerHTML = '<img src=" '+ ele.femaleProfileURL +' ">'
        }
        imgDiv.appendChild(femaleDiv);

        /* -------------- Info div ---------------- */

        let info = document.createElement('div');  
        info.className = 'info';
        field.appendChild(cardCont).appendChild(info);

        let nameP = document.createElement('p');
        let nameInp = document.createElement('input');    
        nameInp.id = 'name';    
        nameP.innerHTML = `${'<b>Name:</b>'} ${ele.firstName}`;
        info.appendChild(nameP);
        nameP.appendChild(nameInp);

        let surnameP = document.createElement('p');
        let surnameInp = document.createElement('input'); 
        surnameInp.id = 'surname'; 
        surnameP.innerHTML = `${'<b>Last Name:</b>'} ${ele.lastName}`;
        info.appendChild(surnameP);
        surnameP.appendChild(surnameInp);

        let genderP = document.createElement('p');
        let genderInp = document.createElement('input');
        genderInp.id = 'gender'; 
        genderP.innerHTML = `${'<b>Gender:</b>'} ${ele.gender}`;
        info.appendChild(genderP);
        genderP.appendChild(genderInp);

        let emailP = document.createElement('p');
        let emailInp = document.createElement('input');
        emailInp.id = 'email'; 
        emailP.innerHTML = `${'<b>Email:</b>'} ${ele.email}`;
        info.appendChild(emailP);
        emailP.appendChild(emailInp);

        let submitP = document.createElement('p');
        let submitBtn = document.createElement('button'); 
        submitBtn.innerText = 'Submit';
        submitBtn.onclick = function() {
            nameP.innerHTML = `${'<b>Name: </b>'} ${nameInp.value}`;
            surnameP.innerHTML = `${'<b>Last Name: </b>'} ${surnameInp.value}`;
            genderP.innerHTML = `${'<b>Gender: </b>'} ${genderInp.value}`;
            emailP.innerHTML = `${'<b>Email: </b>'} ${emailInp.value}`;
            submitP.style.display = 'none';
        }
        
        info.appendChild(submitP);
        submitP.appendChild(submitBtn);

        });
    })
}

//#endregion

//#region  ---------------- Button Remove Card ------------------

let btnRemove = document.createElement('button');
btnRemove.className = 'btnRemove';
btnRemove.innerHTML = 'REMOVE CARDS...'
btnRemove.onclick = function() {document.querySelector('div.cardCont').remove();};
btnField.appendChild(btnRemove);

//#endregion