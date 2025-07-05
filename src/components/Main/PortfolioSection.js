import './PortfolioSection.css';

export const PortfolioSection = () => {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const a = document.createElement('a');

  h2.innerText = 'Portfolio';
  section.appendChild(h2);

  p.id = 'portfolio-text';
  section.appendChild(p);

  a.href = 'https://mateotasconportfolio.netlify.app/';
  a.innerText = 'Portfolio';
  a.target = 'blank';
  section.appendChild(a);

  section.classList.add('portfolio');

  return section;
};