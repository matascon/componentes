import './IconMenu.css';

export const IconMenu = (route, id) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  svg.appendChild(use);
  svg.id = id;
  svg.classList.add('icon-menu');


  use.setAttribute('href', route);

  return svg;
};