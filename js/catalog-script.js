const cartLinkArray = document.querySelectorAll(".product-buy");
const cartPopup = document.querySelector(".modal-add-to-cart");
const cartClose = document.querySelector(".modal-add-to-cart-close");

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