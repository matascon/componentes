import './Main.css';
import { InfoSection } from './InfoSection';
import { StudiesSection } from './StudiesSection';
import { PortfolioSection } from './PortfolioSection';

export const Main = () => {
  const container = document.querySelector('#container');
  const main = document.createElement('main');
  let section = document.createElement('section');
  
  section = InfoSection();
  main.appendChild(section);

  section = StudiesSection();
  main.appendChild(section);

  section = PortfolioSection();
  main.appendChild(section);

  container.appendChild(main);
};
