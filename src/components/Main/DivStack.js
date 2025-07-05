import './DivStack.css';
import { knowledge, learning } from './dataStack';
import { PrintStackIcons } from './PrintStackIcons';

export const DivStack = () => {
  const divStack = document.createElement('div');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  let div = document.createElement('div');

  h2.id = 'info-stack';
  divStack.appendChild(h2);

  divStack.appendChild(PrintStackIcons(knowledge));

  h3.id = 'info-learning';
  divStack.appendChild(h3);

  divStack.appendChild(PrintStackIcons(learning));

  divStack.classList.add('div-stack');

  return divStack;
};