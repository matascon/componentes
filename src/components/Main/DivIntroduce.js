import './DivIntroduce.css';

const DivIntroduce= () => {
  const divIntroduce = document.createElement('div');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h1.id = 'info-title'
  divIntroduce.appendChild(h1);

  h2.id = 'info-subtitle';
  divIntroduce.appendChild(h2);

  p.id = 'info-text';
  divIntroduce.appendChild(p);

  divIntroduce.classList.add('div-introduce');

  return divIntroduce;
};

export default DivIntroduce;