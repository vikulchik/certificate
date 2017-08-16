$('.slider, .popup__slider').bxSlider();


var methodsSend = document.querySelector('.methods');
var methodButton = document.querySelector('.methods__button');
var buttonEmail = document.querySelector('.methods__button--email');
var buttonMessage = document.querySelector('.methods__button--message');
var buttonPrint = document.querySelector('.methods__button--print');
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
});

closePopup.addEventListener('click', function () {
   closeMainPopup();
});

document.addEventListener('keydown', function (e) {
    if(e.keyCode = ESC) {
        closeMainPopup();
    }
});


/*methods.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('methods__button--email')) {
        buttonEmail.style.backgroundColor = '#00a89e';
        buttonEmail.style.color = 'white';
        buttonEmail.style.backgroundImage = 'url("../img-certificate/email-white.png") no-repeat 68px 16px';
    }
});*/