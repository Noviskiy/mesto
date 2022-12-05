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

//ОБЩАЯ ФУНКЦИЯ ОТКРЫТИЯ ПОПАПОВ
  const popupOpenButtonEditProfile = document.querySelector('.profile__edit-button');// кнопка открытия попапа редактирования профиля
  const popupEditProfile = document.querySelector('#userData'); //попап редактирования профиля
  const popupOpenButtonAddImg = document.querySelector('.profile__add-button'); // кнопка открытия попапа добавления фото
  const popupAddImg = document.querySelector('#userImg'); //попап редактирования профиля

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

popupOpenButtonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = newUserName.textContent;
  jobInput.value = newUserJob.textContent; 
}); 
popupOpenButtonAddImg.addEventListener('click', () => {
  openPopup(popupAddImg);
}); 

//ОБЩАЯ ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПОВ
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const popups = document.querySelectorAll('.popup'); //Находим все попапы в проекте 
  popups.forEach((popup) => { //выполняем для каждого один раз навешивание обработчика
    popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened')) { //если есть класс открытия тогда закрываем
        closePopup(popup)
      }
      if (event.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
    })
  });
  
const popupProfile = document.querySelector('#userData'); //переменная всей формы
const popup = popupProfile.querySelector('.popup__close');// переменная кнопки закрытия попапа редактирования профиля

const formElement = document.querySelector('.popup__content'); // переменная внутри формы попапа
const nameInput = formElement.querySelector('#popupUserName'); // получаем значения введенные в поля имя и профессия
const jobInput = formElement.querySelector('#popupUserJob');
const newUserName = document.querySelector('.profile__name'); // получаем значения имени и професии со страницы
const newUserJob = document.querySelector('.profile__job');

function handlerFormSubmit (evt) { // функция обработчик отправки форм
    evt.preventDefault(); // отменяем все действия
    newUserName.textContent = nameInput.value; //текстовые значения на странице перезаписываются значениями из попапа
    newUserJob.textContent = jobInput.value;
    closePopup(popupEditProfile); //попап закрывается
}

// КАРТОЧКИ
  const cardsContainer = document.querySelector('.cards'); // переменная для всех карточек
  const cardTemplate = document.querySelector('#userCards').content.querySelector('.card'); //получаем доступ к шаблону temlate, добавляем атрибут content и выделяем узел card (получаем карточку)  
  const popupAddCard = document.querySelector('#userImg'); // переменная формы добавления карточек
  const popupUserLocation = document.querySelector('#popupUserLocation');  //значения новых названия и ссылки фотографий
  const popupUserLink = document.querySelector('#popupUserLink');
  const formElementAdd = document.querySelector('#userImg');    // переменная формы добавления карточек
  const locationInput = formElementAdd.querySelector('#popupUserLocation');  //получаем значения введенные пользователем
  const linkInput = formElement.querySelector('#popupUserLink');

formElement.addEventListener('submit', handlerFormSubmit); // слушатель события для попапа, после срабатывания попап сохраняеться и закрывется 

  const popupSaveImg = popupAddCard.querySelector('#saveImg');
  const formSaveImg = popupAddCard.querySelector('.popup__content');
  
  const saveUserImg = function(event) {  //функция обработчик события для кнопки сохранения
    event.preventDefault();
    renderCard({name: popupUserLocation.value, link: popupUserLink.value});
    closePopup(popupAddImg);
    formSaveImg.reset(); //очистка формы
  }

  popupSaveImg.addEventListener('submit', saveUserImg);

    const newCard = document.querySelector('#userCards');    // родительская карточка

    const handleDeleteCard = (event) => {  //функция удаления
      event.target.closest('.card').remove();
    }

    const handleLikeCard = (event) => {  //функция добавления класса лайка
      event.target.closest('.card__hart-button').classList.toggle('card__hart-button_active');
    }

    const popupImgViwer = document.querySelector('#viwerImg'); // переменная попапа просмотра картинок
    const formViwerImg = document.querySelector('#viwerImg');
    const bigImg = formViwerImg.querySelector('#bigImg');
    const imgName = formViwerImg.querySelector('#imgName');
    const altImg = formViwerImg.querySelector('#imgName');

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

    const popupOpenButtonViwerImg = newCard.querySelector('.card__image');
    const popupViwerImg = document.querySelector('#viwerImg');
    popupOpenButtonViwerImg.addEventListener('click', () => {
      openPopup(popupViwerImg);
      bigImg.src = dataCard.link;
      imgName.textContent = dataCard.name;
      bigImg.alt = dataCard.name;
    });

    return newCard;
  }

  const renderCard = (dataCard) => {    // добавление карточки
    cardsContainer.prepend(generateCard(dataCard)); 
  };

  popupAddCard.addEventListener('submit', saveUserImg);  // слушатель нажатия кнопки сохранения

  initialCards.forEach((dataCard) => {
    renderCard(dataCard);
  });