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
let tmp = 0;
let pictureSource;
let destinationType;

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
    Zdjecie.addEventListener("click", dodawanieZdjecia);


}
function start(){


    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;


}
function dodajKontakt() {

    function onSuccess() {

        navigator.notification.alert(Imie.value + " dodany do kontaktów.", function () { }, "Zrobione!", "ok");
        Imie.value = "";
        Nazwisko.value = "";
        Telefon.value = "";
    };

    function onError() {

        navigator.notification.alert("Wyst¹pi³ b³¹d", function () { }, "B³¹d :(", "ok");
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
       addresses = new ConctactField(Adres.value);
        contact.save(onSuccess, onError);


    } else {
        contact.save(onSuccess, onError);
    }

}
function aktywacja() {

    if (tmp == 0) {
        tmp = 1;
        czyWiecej = true;
    } else {
        czyWiecej = false;
        tmp = 0;
    }
    var Ukryty = document.getElementById("Ukryty");
    Ukryty.classList.toggle("aktywny");
    if (Ukryty.className.includes("aktywny"[2])) {
       
        Rozszerzenie.innerHTML = "Podstawowe opcje"
    } else {
        Rozszerzenie.innerHTML = "Dodatkowe opcje";
    }
    console.log(Ukryty.classList.item(2));

}
function dodawanieZdjecia() {
    
    function onPhotoDataSuccess(imageData) {

        var image = document.getElementById("NoweZdjecie");

        image.style.display = 'block';

       image.src = "data:image/jpeg;base64," + imageData;
       
    }

    function cameraError() {
        navigator.notification.alert("Wyst¹pi³ b³¹d", function () { }, "B³¹d :(", "ok");
    }
    
    navigator.camera.getPicture(onPhotoDataSuccess, cameraError, { quality: 50,destinationType: destinationType.DATA_URL });

    

}

