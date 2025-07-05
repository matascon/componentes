import './StudiesSection.css';
import StudyCard from './StudyCard';
import { studies } from './dataMain';

export const StudiesSection = () => {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');

  h2.id = 'studies-title';
  section.appendChild(h2);

  for (const study of studies) {
    section.appendChild(StudyCard(study));
  }

  section.classList.add('studies');
  
  return section;
};