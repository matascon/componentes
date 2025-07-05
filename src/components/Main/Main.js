import './Main.css';
import { DivIntroduce } from './DivIntroduce';
import { DivStack } from './DivStack';

export const Main = () => {
  const container = document.querySelector('#container');
  const main = document.createElement('main');

  let section = document.createElement('section');
  section.classList.add('info');

  section.appendChild(DivIntroduce());
  section.appendChild(DivStack());
  main.appendChild(section);

  container.appendChild(main);
};
