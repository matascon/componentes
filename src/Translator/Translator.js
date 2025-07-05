import i18next from './i18next.js';

export const Translator = () => {
  const pTextMenu = document.querySelector('#text-menu');
  
  const h1InfoTitle = document.querySelector('#info-title');
  const h2InfoSubTitle = document.querySelector('#info-subtitle');
  const pInfoText = document.querySelector('#info-text');
  const h2InfoStack = document.querySelector('#info-stack');
  const h3InfoLearning = document.querySelector('#info-learning');


  pTextMenu.innerText = i18next.t('about_me');

  h1InfoTitle.innerHTML = i18next.t('info_title');
  h2InfoSubTitle.innerText = i18next.t('info_subtitle');
  pInfoText.innerText = i18next.t('info_text');
  h2InfoStack.innerText = i18next.t('info_stack');
  h3InfoLearning.innerText = i18next.t('info_learning');

  const buttonChangeLanguage = document.querySelector('#button-change-language');
  buttonChangeLanguage.addEventListener("click", () => {
    const imgButton = document.querySelector('#button-change-language > img');
    if (buttonChangeLanguage.classList[0] === 'es') {
      buttonChangeLanguage.classList.remove('es');
      buttonChangeLanguage.classList.add('en');
      imgButton.src = '/images/uk.png';
    } else {
      buttonChangeLanguage.classList.remove('en');
      buttonChangeLanguage.classList.add('es');
      imgButton.src = '/images/spain.png';
    }

    i18next.changeLanguage(buttonChangeLanguage.classList[0]).then((t) => {
        pTextMenu.innerText = i18next.t('about_me');

        h1InfoTitle.innerHTML = i18next.t('info_title');
        h2InfoSubTitle.innerText = i18next.t('info_subtitle');
        pInfoText.innerText = i18next.t('info_text');
        h2InfoStack.innerText = i18next.t('info_stack');
        h3InfoLearning.innerText = i18next.t('info_learning');
    });
  });
};