const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupSave = document.querySelector('.popup__save');

const hartButton = document.querySelector('.card__hart-button');

const onHart = function(){
    hartButton.classList.add('card__hart-button_active');
}

const activateHartButton = function(eve) {
    if (eve.target.classList.contains('card__hart-button_active')){
        eve.target.classList.remove('card__hart-button_active');
        return;
    }
    eve.target.classList.add('card__hart-button_active');
}

hartButton.addEventListener('click', activateHartButton);


const openPopup = function() {
    popupElement.classList.add('popup_opened');
}
const closePopup = function(event) {
    popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function(event) {
    if (event.target !== event.currentTarget) {
        return;
    } 
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

popupSave.addEventListener('click', function () {
    formSubmitHandler();
    closePopup();
});

let formElement = document.querySelector('.popup__content');
let nameInput = formElement.querySelector('#popupUserName');
let jobInput = formElement.querySelector('#popupUserJob');
let newUserName = document.querySelector('.profile__name');
let newUserJob = document.querySelector('.profile__job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    newUserName.textContent = nameInput.value;
    newUserJob.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 

nameInput.value = newUserName.textContent;
jobInput.value = newUserJob.textContent;