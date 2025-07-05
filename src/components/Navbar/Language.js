import './Language.css';

export const Language = () => {
  const divLanguage = document.createElement('div');
  const button = document.createElement('button');
  const img = document.createElement('img');

  if (navigator.languages[1] === 'es') {
    img.src = '/images/spain.png';
    button.classList.add('es');
  } else {
    img.src = '/images/uk.png';
    button.classList.add('en');
  }
  button.id = 'button-change-language';
  button.appendChild(img);
  divLanguage.appendChild(button);
  divLanguage.classList.add('language');

  return divLanguage;
};