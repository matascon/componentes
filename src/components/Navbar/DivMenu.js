import './DivMenu.css';
import { IconMenu } from './IconMenu.js';

export const DivMenu = () => {
    const divMenu = document.createElement('div');
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    const characteristics = [
      {
        route: '/assetsNavbar.svg#info',
        id: 'icon-info'
      },
      {
        route: '/assetsNavbar.svg#studies',
        id: 'icon-studies'
      },
      {
        route: '/assetsNavbar.svg#portfolio',
        id: 'icon-portfolio'
      }
    ];
  
    for (let i = 0; i < characteristics.length; i++) {
      const li = document.createElement('li');
      li.appendChild(IconMenu(characteristics[i].route, characteristics[i].id));
  
      ul.appendChild(li);
    }
    divMenu.classList.add('menu');
    divMenu.appendChild(ul);
    p.id = 'text-menu';
    if (navigator.languages[1] === 'es') {
      p.classList.add('es');
    } else {
      p.classList.add('en');
    }
    divMenu.appendChild(p);

    return divMenu;
};