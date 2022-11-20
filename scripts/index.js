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