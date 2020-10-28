const feedbackLink = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = document.querySelector(".modal-feedback-close");
const feedbackForm = feedbackPopup.querySelector("form");
const feedbackUserName = document.querySelector("[name = user-name]");
const feedbackUserMail = document.querySelector("[name = user-mail]");
const feedbackText = document.querySelector("[name = user-text]");
const mapPopup = document.querySelector(".modal-map");
const mapClose = document.querySelector(".modal-map-close");
const mapOpener = document.querySelector(".city-map");
const cartLinkArray = document.querySelectorAll(".product-buy");
const cartPopup = document.querySelector(".modal-add-to-cart");
const cartClose = document.querySelector(".modal-add-to-cart-close");
const slideDelivery = document.querySelector(".delivery-slide");
const slideGuarantee = document.querySelector(".guarantee-slide");
const slideCredit = document.querySelector(".credit-slide");
const buttonDelivery = document.querySelector(".services-delivery-button");
const buttonGuarantee = document.querySelector(".services-guarantee-button");
const buttonCredit = document.querySelector(".services-credit-button"); 
const slidePerf = document.querySelector(".perf");
const slideDrill = document.querySelector(".drill");
const slideArrowForw = document.querySelector(".slider-button-forward");
const slideArrowBack = document.querySelector(".slider-button-back");
const slideRadioFirst = document.querySelector(".slider-button-slide-1");
const slideRadioSecond = document.querySelector(".slider-button-slide-2");


let isStorageSupport = true;
let storageName = "";
let storageMail = "";

try {
  storageName = localStorage.getItem("userName");
  storageMail = localStorage.getItem("userMail");
} catch (err) {
  isStorageSupport = false;
}

// feedback

feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storageName && storageMail) {
        feedbackUserName.value = storageName;
        feedbackUserMail.value = storageMail;
      }
    feedbackUserName.focus();
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!feedbackUserName.value || !feedbackUserMail.value || !feedbackText) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("userName", feedbackUserName.value);
            localStorage.setItem("userMail", feedbackUserMail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    }
});

// map

mapOpener.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});

// catalog-modal

cartLinkArray.forEach(a => {
    a.addEventListener("click", function(evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });    
});

cartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
        }
    }
});

// services-slide

buttonGuarantee.addEventListener("click", function(evt) {
    evt.preventDefault();
    buttonDelivery.classList.remove("current-button");
    buttonCredit.classList.remove("current-button")
    buttonGuarantee.classList.add("current-button");
    slideCredit.classList.remove("current-service-slide");
    slideDelivery.classList.remove("current-service-slide");
    slideGuarantee.classList.add("current-service-slide");
});

buttonDelivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    buttonGuarantee.classList.remove("current-button");
    buttonCredit.classList.remove("current-button")
    buttonDelivery.classList.add("current-button");
    slideGuarantee.classList.remove("current-service-slide");
    slideCredit.classList.remove("current-service-slide");
    slideDelivery.classList.add("current-service-slide");
});

buttonCredit.addEventListener("click", function(evt) {
    evt.preventDefault();
    buttonDelivery.classList.remove("current-button");
    buttonGuarantee.classList.remove("current-button")
    buttonCredit.classList.add("current-button");
    slideGuarantee.classList.remove("current-service-slide");
    slideDelivery.classList.remove("current-service-slide");
    slideCredit.classList.add("current-service-slide");
});

slideRadioFirst.addEventListener("click", function(evt) {
    evt.preventDefault();
    slideRadioSecond.classList.remove("current-circle-button")
    slideRadioFirst.classList.add("current-circle-button");
    slideDrill.classList.remove("current-slide");
    slidePerf.classList.add("current-slide");
});

slideRadioSecond.addEventListener("click", function(evt) {
    evt.preventDefault();
    slideRadioFirst.classList.remove("current-circle-button")
    slideRadioSecond.classList.add("current-circle-button");
    slidePerf.classList.remove("current-slide");
    slideDrill.classList.add("current-slide");
});

slideArrowForw.addEventListener("click", function(evt) {
    evt.preventDefault();
    slidePerf.classList.toggle("current-slide");
    slideDrill.classList.toggle("current-slide");
    slideRadioFirst.classList.toggle("current-circle-button")
    slideRadioSecond.classList.toggle("current-circle-button");
});

slideArrowBack.addEventListener("click", function(evt) {
    evt.preventDefault();
    slidePerf.classList.toggle("current-slide");
    slideDrill.classList.toggle("current-slide");
    slideRadioFirst.classList.toggle("current-circle-button")
    slideRadioSecond.classList.toggle("current-circle-button");
});