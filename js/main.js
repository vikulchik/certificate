$('.slider').bxSlider();

var openPopup = document.querySelector('.list-wrapper .clean-link');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.close-popup');
const ESC = 13;

var closeMainPopup = function () {
    popup.style.display = 'none';
};

openPopup.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'block';
    $('.popup__slider').bxSlider();
});

closePopup.addEventListener('click', function () {
   closeMainPopup();
});

document.addEventListener('keydown', function (e) {
    if(e.keyCode = ESC) {
        closeMainPopup();
    }
});
