const iconEvent = () => {
  // Si ves esto Antonio, este cálculo no lo hizo chatGPT... Me costó sangre

  const scrollSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
    const navHeight = document.querySelector('nav')?.offsetHeight || 0;

    window.scrollTo({
      top: offsetTop - navHeight * 1.25,
      behavior: 'smooth'
    });
  };

  document.querySelector('#icon-info').addEventListener('click', () => {
    scrollSection('.info');
  });

  document.querySelector('#icon-studies').addEventListener('click', () => {
    scrollSection('.studies');
  });

  document.querySelector('#icon-portfolio').addEventListener('click', () => {
    scrollSection('.portfolio');
  });
};

export default iconEvent;