import './Navbar.css';
import { DivMenu } from './DivMenu.js';
import { DivUtilities } from './DivUtilities.js';

export const Navbar = () => {
  const nav = document.createElement('nav');

  nav.appendChild(DivMenu());
  nav.appendChild(DivUtilities());

  document.querySelector('#container').appendChild(nav);
};