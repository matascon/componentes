import i18next from './i18next.js';
import { studies } from '../components/Main/dataMain.js';

const translator = () => {
  let i;
  const buttonChangeLanguage = document.querySelector('#button-change-language');

  const pTextMenu = document.querySelector('#text-menu');
  
  const h1InfoTitle = document.querySelector('#info-title');
  const h2InfoSubTitle = document.querySelector('#info-subtitle');
  const pInfoText = document.querySelector('#info-text');
  const h2InfoStack = document.querySelector('#info-stack');
  const h3InfoLearning = document.querySelector('#info-learning');

  const h2StudiesTitle = document.querySelector('#studies-title');
  const h2StudiesName = document.querySelectorAll('.studies-name');
  const pStudiesText = document.querySelectorAll('.studies-text');

  const pPortfolioText = document.querySelector('#portfolio-text');

  //-----------------------------------------------

  h1InfoTitle.innerHTML = i18next.t('info_title');
  h2InfoSubTitle.innerText = i18next.t('info_subtitle');
  pInfoText.innerHTML = i18next.t('info_text');
  h2InfoStack.innerText = i18next.t('info_stack');
  h3InfoLearning.innerText = i18next.t('info_learning');

  h2StudiesTitle.innerText = i18next.t('studies_title');
  if (buttonChangeLanguage.classList[0] === 'es') {
    for (i = 0; i < studies.length; i++) {
      h2StudiesName[i].innerText = studies[i].name_es;
      pStudiesText[i].innerText = studies[i].description_es;
    }
  } else {
    for (i = 0; i < studies.length; i++) {
      h2StudiesName[i].innerText = studies[i].name_en;
      pStudiesText[i].innerText = studies[i].description_en;
    }
  }

  pPortfolioText.innerText = i18next.t('portfolio_text');

  //----------------------------------------------

  buttonChangeLanguage.addEventListener("click", () => {
    const imgButton = document.querySelector('#button-change-language > img');
    if (buttonChangeLanguage.classList[0] === 'es') {
      buttonChangeLanguage.classList.remove('es');
      buttonChangeLanguage.classList.add('en');
      imgButton.src = '/images/uk.png';
      pTextMenu.classList.remove('es');
      pTextMenu.classList.add('en');
    } else {
      buttonChangeLanguage.classList.remove('en');
      buttonChangeLanguage.classList.add('es');
      imgButton.src = '/images/spain.png';
      pTextMenu.classList.remove('en');
      pTextMenu.classList.add('es');
    }

    i18next.changeLanguage(buttonChangeLanguage.classList[0]).then((t) => {
        h1InfoTitle.innerHTML = i18next.t('info_title');
        h2InfoSubTitle.innerText = i18next.t('info_subtitle');
        pInfoText.innerHTML = i18next.t('info_text');
        h2InfoStack.innerText = i18next.t('info_stack');
        h3InfoLearning.innerText = i18next.t('info_learning');

        h2StudiesTitle.innerText = i18next.t('studies_title');
        if (buttonChangeLanguage.classList[0] === 'es') {
          for (i = 0; i < studies.length; i++) {
            h2StudiesName[i].innerText = studies[i].name_es;
            pStudiesText[i].innerText = studies[i].description_es;
          }
        } else {
          for (i = 0; i < studies.length; i++) {
            h2StudiesName[i].innerText = studies[i].name_en;
            pStudiesText[i].innerText = studies[i].description_en;
          }
        }

        pPortfolioText.innerText = i18next.t('portfolio_text');
    });
  });
};

export default translator;