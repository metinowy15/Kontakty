// JavaScript source code
window.addEventListener("DOMContentLoaded",startStrony);

let Telefon;
let Imie;
let Nazwisko;
let Email;
let Zdjecie;
let Nick;
let Adres;
let Poprawnosc;
let Ukryty;
let Rozszerzenie;
let czyWiecej = false;

function startStrony(){
    //pola z danymi
    Telefon=document.getElementById("Telefon");
    Imie = document.getElementById("Imie");
    Nazwisko = document.getElementById("Nazwisko");
    Email = document.getElementById("Email");
    Zdjecie = document.getElementById("Zdjecie");
    Nick = document.getElementById("Nick");
    Adres = document.getElementById("Adres");
    //mechanizm skryptu
    Ukryty = document.getElementById("Ukryty");
    Poprawnosc = document.getElementById("Poprawnosc");
    Rozszerzenie = document.getElementById("Rozszerzenie");
    window.addEventListener("deviceready", start);
    Rozszerzenie.addEventListener("click", aktywacja);


}
function start(){





}
function dodajKontakt() {

    function onSuccess() {

        navigator.notification.alert(Imie.value + " dodany do kontakt�w.", function () { }, "Zrobione!", "ok");
        Imie.value = "";
        Nazwisko.value = "";
        Telefon.value = "";
    };

    function onError() {

        navigator.notification.alert("Wyst�pi� b��d", function () { }, "B��d :(", "ok");
    };





    var contact = navigator.contacts.create();

    var name = new ContactName();
    name.givenName = Imie.value;
    name.familyName = Nazwisko.value;
    contact.name = name;
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('mobile', Telefon.value, true);
    contact.phoneNumbers = phoneNumbers;
    if (czyWiecej == true) {
        

        contact.nickname = Nick.value;
        var emails = [];
        emails[0] = new ContactField(Email.value);
        contact.emails = emails;
        var addresses = [];
        addresses = new ConctactField("home", Adres.value, true);
        contact.save(onSuccess, onError);


    } else {
        contact.save(onSuccess, onError);
    }

}
function aktywacja() {

    
    var Ukryty = document.getElementById("Ukryty");
    Ukryty.classList.toggle("aktywny");
    if (Ukryty.className.includes("aktywny"[2])) {
        czyWiecej = true;
        Rozszerzenie.innerHTML = "Podstawowe opcje"
    } else {
        czyWiecej = false;
        Rozszerzenie.innerHTML = "Dodatkowe opcje";
    }
    console.log(Ukryty.classList.item(2));

}

