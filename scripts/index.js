const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


  // РЕДАКТИРОВАНИЕ ПРОФИЛЯ
  const popupProfile = document.querySelector('#userData'); //переменная всей формы
  const popupCloseButtonElement = popupProfile.querySelector('.popup__close');// переменная кнопки закрытия попапа редактирования профиля
  const popupOpenButtonElement = document.querySelector('.profile__edit-button');// переменная кнопки открытия попапа редактирования профиля

  const openPopupProfile = function() {  // функция открытия попапа редактора профиля
    popupProfile.classList.add('popup_opened'); // добавляет класс попапу редактирования профиля
    nameInput.value = newUserName.textContent; // выводит в текстовые поля попапа значения со страницы
    jobInput.value = newUserJob.textContent; 
}

const closePopupProfile = function(event) { // функция закрытия попапа редактирования профиля
  popupProfile.classList.remove('popup_opened'); //уберает класс у попапа редактирования профиля
}

const closePopupByClickOnOverlay = function(event) { //функция закрытия попапа по клику вне области попапа
  if (event.target !== event.currentTarget) {
      return;
  } 
  closePopupProfile();
}

popupOpenButtonElement.addEventListener('click', openPopupProfile); //на кнопку открытия попапа добавляем слушатель клика
popupCloseButtonElement.addEventListener('click', closePopupProfile); //на кнопку закрытия попапа добавляем слушатель клика
popupProfile.addEventListener('click', closePopupByClickOnOverlay); //добавляем слушатель клика вне попапа

let formElement = document.querySelector('.popup__content'); // переменная внутри формы попапа
let nameInput = formElement.querySelector('#popupUserName'); // получаем значения введенные в поля имя и профессия
let jobInput = formElement.querySelector('#popupUserJob');
let newUserName = document.querySelector('.profile__name'); // получаем значения имени и професии со страницы
let newUserJob = document.querySelector('.profile__job');

function formSubmitHandler (evt) { // функция обработчик отправки форм
    evt.preventDefault(); // отменяем все действия
    newUserName.textContent = nameInput.value; //текстовые значения на странице перезаписываются значениями из попапа
    newUserJob.textContent = jobInput.value;
    closePopupProfile(); //попап закрывается
}

  // КАРТОЧКИ
  const cardsContainer = document.querySelector('.cards'); // переменная для всех карточек
  const cardTemplate = document.querySelector('#userCards').content.querySelector('.card'); //получаем доступ к шаблону temlate, добавляем атрибут content и выделяем узел card (получаем карточку)  

  const popupAddCard = document.querySelector('#userImg'); // переменная формы добавления карточек
  const popupCloseButtonEddElement = popupAddCard.querySelector('.popup__close'); //кнопка закрытия попапа добавления карточек
  const popupOpenButtonEddElement = document.querySelector('.profile__add-button'); //кнопка открытия попапа добавления крточек

  const popupUserLocation = document.querySelector('#popupUserLocation');  //значения новых названия и ссылки фотографий
  const popupUserLink = document.querySelector('#popupUserLink');

formElement.addEventListener('submit', formSubmitHandler); // слушатель события для попапа, после срабатывания попап сохраняеться и закрывется 

const openAddPopup = function() {  // функция открытия попапа добавления фотографий
  popupAddCard.classList.add('popup_opened'); // добавляет класс попапу добавления фото
}

 const closePopupAdd = function(event) {   // функция закрытия попапа добавления фотографий
  popupAddCard.classList.remove('popup_opened');
}

const closePopupAddByClickOnOverlay = function(event) {  //функция закрытия попапа по клику вне области попапа
if (event.target !== event.currentTarget) {
    return;
} 
closePopupAdd();
}

  const popupSaveImg = popupAddCard.querySelector('#saveImg');
  
  const saveUserImg = function(event) {  //функция обработчик события для кнопки сохранения
    event.preventDefault();
    renderCard({name: popupUserLocation.value, link: popupUserLink.value});
    popupUserLocation.value = '';
    popupUserLink.value = '';
    closePopupAdd();
  }

  popupSaveImg.addEventListener('click', saveUserImg);


popupOpenButtonEddElement.addEventListener('click', openAddPopup);   //на кнопку открытия попапа добавляем слушатель клика
popupCloseButtonEddElement.addEventListener('click', closePopupAdd);  //на кнопку закрытия попапа добавляем слушатель клика
popupAddCard.addEventListener('click', closePopupAddByClickOnOverlay);  //добавляем слушатель клика вне попапа


  let formElementAdd = document.querySelector('#userImg');    // переменная формы добавления карточек
  let locationInput = formElementAdd.querySelector('#popupUserLocation');  //получаем значения введенные пользователем
  let linkInput = formElement.querySelector('#popupUserLink');



    const newCard = document.querySelector('#userCards');    // родительская карточка

    const handleDeleteCard = (event) => {  //функция удаления
      event.target.closest('.card').remove();
    }

    const handleLikeCard = (event) => {  //функция добавления класса лайка
      event.target.closest('.card__hart-button').classList.toggle('card__hart-button_active');
    }

    const popupImgViwer = document.querySelector('#viwerImg'); // переменная попапа просмотра картинок
    const formViwerImg = document.querySelector('#viwerImg');
    const popupCloseButtonImgViwer = formViwerImg.querySelector('.popup__close'); //кнопка закрытия попапа просмотра картинок
    let bigImg = formViwerImg.querySelector('#bigImg');
    let imgName = formViwerImg.querySelector('#imgName');

    const generateCard = (dataCard) => {  //генерация карточки
    const newCard = cardTemplate.cloneNode(true);    //клонируем крточки
    const newImage = newCard.querySelector('.card__image'); // получаем фото
    const newTitle = newCard.querySelector('.card__name');  // получаем название
    newTitle.textContent = dataCard.name; // получаем название для карточки
    newImage.src = dataCard.link;   //получаем ссылку на фото
    newImage.alt = dataCard.name;   //получаем подпись к фото

    const recycleButton = newCard.querySelector('.card__recycle-button'); //Удаление
    recycleButton.addEventListener('click', handleDeleteCard);
    
    const likeButton = newCard.querySelector('.card__hart-button'); //Лайки
    likeButton.addEventListener('click', handleLikeCard);

    const handleOpenImg = function() {  //функция открытия попапа
      popupImgViwer.classList.add('popup_opened');
      bigImg.src = dataCard.link;
      imgName.textContent = dataCard.name;
      }

    const cardImgButton = newCard.querySelector('.card__image'); // Кнопка-картинка
    cardImgButton.addEventListener('click', handleOpenImg);

    return newCard;
  }

  const renderCard = (dataCard) => {    // добавление карточки
    cardsContainer.prepend(generateCard(dataCard)); 
  };

  popupAddCard.addEventListener('submit', saveUserImg);  // слушатель нажатия кнопки сохранения

  initialCards.forEach((dataCard) => {
    renderCard(dataCard);
  });



  const closePopupImgViwer = function(event) {   // функция закрытия попапа добавления фотографий
    popupImgViwer.classList.remove('popup_opened');
  }

  const closePopupImgViwerByClickOnOverlay = function(event) {  //функция закрытия попапа по клику вне области попапа
    if (event.target !== event.currentTarget) {
        return;
    } 
    closePopupImgViwer();
    }

  popupCloseButtonImgViwer.addEventListener('click', closePopupImgViwer);  //на кнопку закрытия попапа добавляем слушатель клика
  popupImgViwer.addEventListener('click', closePopupImgViwerByClickOnOverlay);  //добавляем слушатель клика вне попапа

