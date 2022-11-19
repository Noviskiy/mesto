const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSave = document.querySelector('.popup__save');

const openPopup = function() {
    popupElement.classList.add('popup_opened');
}
const closePopup = function(event) {
    popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return;
    } 
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

function editUserName() {
    var text = document.querySelector('.popup__user-name');
    var val = text.value;
    let userName = document.querySelector('.profile__name');
    userName.textContent = val;
}

function editUserJob() {
    var text = document.querySelector('.popup__user-job');
    var val = text.value;
    let userJob = document.querySelector('.profile__job');
    userJob.textContent = val;
}

popupSave.addEventListener('click', function () {
    editUserName();
    editUserJob();
    closePopup();
});

document.addEventListener('keydown', function(pressEsc) {
    if (pressEsc.key === 'Escape') {
        if (popupElement.classList.contains('popup_opened')) {
            closePopup();
        }
    }
});

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__job');

let clickCounter=0;
let image=document.querySelector(".card__hart");
let imgs=new Array('images/Vector.svg','images/Union.svg');
function hartChange() {
    clickCounter++;
    if(clickCounter % 2 == 0) {
        image.src=imgs[0];
    } else {
        image.src=imgs[1];
    }
}