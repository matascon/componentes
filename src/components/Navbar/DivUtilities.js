import './DivUtilities.css';
import { ColorMode } from './ColorMode';
import { Language } from './Language';

export const DivUtilities = () => {
  const divUtilities = document.createElement('div');

  divUtilities.classList.add('utilities');
  divUtilities.appendChild(ColorMode());
  divUtilities.appendChild(Language());

  return divUtilities;
};