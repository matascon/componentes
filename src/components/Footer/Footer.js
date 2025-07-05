import './Footer.css';
import { buttons } from './dataFooter';

export const Footer = () => {
  const footer = document.createElement('footer');
  const ul = document.createElement('ul');
  const p = document.createElement('p');

  for (const button of buttons) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.src = button.route;
    img.alt = button.alt;
    img.classList.add('dark-img');
    a.appendChild(img);

    p.innerText = button.name;
    a.appendChild(p);

    a.href = button.href;
    a.target = 'blank';
    a.classList.add('footer-button');
    a.classList.add('dark-link');
    li.appendChild(a);

    ul.appendChild(li);
  }

  footer.appendChild(ul);

  p.innerText = 'Copyright © 2025 - Mateo Tascon Gomez';
  footer.appendChild(p);

  document.querySelector('#container').appendChild(footer);
};