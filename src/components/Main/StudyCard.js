import './StudyCard.css';

const StudyCard = (data) => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const pDate = document.createElement('p');
  const pText = document.createElement('p');

  h2.classList.add('studies-name');
  div.appendChild(h2);

  h3.innerHTML = data.school;
  div.appendChild(h3);

  pDate.innerText = data.date;
  div.appendChild(pDate);

  pText.classList.add('studies-text');
  div.appendChild(pText);

  return div;
};

export default StudyCard;