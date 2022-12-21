 //ВАЛИДАЦИЯ

 const checkInputValidity = (input, config) => {  // функция проверки валидности инпутов
  const error = document.querySelector(`#${input.id}-error`)
  if(input.validity.valid) { 
    error.textContent = ''
    input.classList.remove(config.inputErrorClass)  //error.classList.remove(config.errorClass)
  } else {
    error.textContent = input.validationMessage
    error.classList.add(config.errorClass)
    input.classList.add(config.inputErrorClass)
    }
  }
    
  const toggleButtonState = (inputs, button, config) => {
    const isFormValid = inputs.every(input => input.validity.valid)
    if(isFormValid) {
      button.classList.add(config.activeButtonClass)
      button.disabled = ''
    } else {
      button.classList.remove(config.activeButtonClass)
      button.disabled = 'disabled'
    }
  }
     
  const enableValidation = (config) => {
    const forms = [...document.querySelectorAll(config.formSelector)]
    forms.forEach(form => {
      const inputs = [...form.querySelectorAll(config.inputSelector)]
      const button = form.querySelector(config.submitButtonSelector)
      form.addEventListener('submit', (event) => {
        event.preventDefault()
      })
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          checkInputValidity(input, config)
          toggleButtonState(inputs, button, config)
        })
      })
    })
  }
    
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    activeButtonClass: 'popup__button_valid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error'
  }) 