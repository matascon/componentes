const iconEvent = () => {
  // Si ves esto Antonio, este cálculo no lo hizo chatGPT... Me costó sangre

  const navDifference = document.querySelector('.info').getBoundingClientRect().top + window.pageYOffset;

  document.querySelector('#icon-info').addEventListener('click', () => {
    const info = document.querySelector('.info');
    let target = info.getBoundingClientRect().top;

    target += window.pageYOffset;
    target -= navDifference;
    window.scrollTo({ top: target, behavior: 'smooth' });
  });

  document.querySelector('#icon-studies').addEventListener('click', () => {
    const studies = document.querySelector('.studies');
    let target = studies.getBoundingClientRect().top;

    target += window.pageYOffset;
    target -= navDifference;
    window.scrollTo({ top: target, behavior: 'smooth' });
  });

  document.querySelector('#icon-portfolio').addEventListener('click', () => {
    const portfolio = document.querySelector('.portfolio');
    let target = portfolio.getBoundingClientRect().top;

    target += window.pageYOffset;
    target -= navDifference;
    window.scrollTo({ top: target, behavior: 'smooth' });
  });
};

export default iconEvent;