import './InfoSection.css';
import DivIntroduce from './DivIntroduce';
import DivStack from './DivStack';

export const InfoSection = () => {
  const section = document.createElement('section');

  section.appendChild(DivIntroduce());
  section.appendChild(DivStack());
  section.classList.add('info');

  return section;
};