// JavaScript source code
window.addEventListener("DOMContentLoaded",startStrony);

let Telefon;
let Imie;
let Poprawnosc;

function startStrony(){

    Telefon=document.getElementById("Telefon");
    Imie = document.getElementById("Imie");
    Poprawnosc = document.getElementById("Poprawnosc");
    window.addEventListener("deviceready", start);



}
function start(){





}
function dodajKontakt() {

    function onSuccess() {

        Poprawnosc.innerHTML = "Dodano kontakt: " + contact.displayName;
    };

    function onError() {

        Poprawnosc.innerHTML = "Nie uda�o sie doda� b��d: " + contactError.code
    };


    var contact = navigator.contacts.create();
    contact.displayName = Imie.value;
    contact.nickname = Imie.value;

    var name = new ContactName();
    name.givenName = "Kuba";
    name.familyName = "Zelek";
    contact.name = name;

    contact.save(onSuccess, onError);


}

