var body = document.querySelector("body");
var SliderRadioElements = document.querySelectorAll('.slider-radio');
var firstBodyColor = '#849d8f';
var secondBodyColor = '#8996A6';
var thirdBodyColor = '#9D8B84';


var onFirstRadioClick = function () {
    body.style.backgroundColor = firstBodyColor;
};

var onSecondRadioClick = function () {
    body.style.backgroundColor = secondBodyColor;
};

var onThirdRadioClick = function () {
    body.style.backgroundColor = thirdBodyColor;
};


SliderRadioElements.forEach(function (radio) {
    if (radio.id === "product-1") {
        radio.addEventListener('change', onFirstRadioClick);
    } else if (radio.id === "product-2") {
        radio.addEventListener('change', onSecondRadioClick);
    } else {
        radio.addEventListener('change', onThirdRadioClick);
    }
})


var link = document.querySelector(".button_map-modal");
var popup = document.querySelector(".modal-background");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".modal-form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var isStorageSupport = true;
var login_storage = "";
var email_storage = "";

try {
    login_storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}
try {
    email_storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (email_storage) {
        email.value = email_storage;
    }
    if (login_storage) {
        login.value = login_storage;
        letter.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !letter.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});


function initMap() {

    var coordX = 59.939450;
    var coordY = 30.329500;
    var markerWidth = 80;
    var markerHeight = 140;
    var zoomScale = 16.0;
    var markerX = 59.938770;
    var markerY = 30.323180;


    var coordinates = {lat: coordX, lng: coordY};
    var coordinatesMarker = {lat: markerX, lng: markerY};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: zoomScale, center: coordinates, disableDefaultUI: true});


    new google.maps.Marker({
        position: coordinatesMarker,
        map: map,
        icon: {
            url: "img/icon/pin.svg",
            scaledSize: new google.maps.Size(markerWidth, markerHeight)
        }
    });


}

