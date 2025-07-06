const scrollEvent = () => {
  const navIcons = document.querySelectorAll('.icon-menu');
  const sections = document.querySelectorAll('main > section');
  const buttonChangeLanguage = document.querySelector('#button-change-language');
  const pTextMenu = document.querySelector('#text-menu');
  let sectionClass;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionClass = entry.target.getAttribute('class');
        navIcons.forEach(icon => {
          icon.classList.toggle('active', icon.getAttribute('id') === `icon-${sectionClass}`);
          switch (sectionClass) {
            case 'info':
              if (pTextMenu.classList[0] === 'es') {
                pTextMenu.innerText = 'Sobre mí';
              } else {
                pTextMenu.innerText = 'About me';
              }
              break;
            case 'studies':
              if (pTextMenu.classList[0] === 'es') {
                pTextMenu.innerText = 'Estudios';
              } else {
                pTextMenu.innerText = 'Studies';
              }
              break;
            default:
              if (pTextMenu.classList[0] === 'es') {
                pTextMenu.innerText = 'Portfolio';
              } else {
                pTextMenu.innerText = 'Portfolio';
              }
          }
        })
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  sections.forEach(section => observer.observe(section));
  buttonChangeLanguage.addEventListener('click', () => {
    switch (sectionClass) {
      case 'info':
        if (pTextMenu.classList[0] === 'es') {
          pTextMenu.innerText = 'Sobre mí';
        } else {
          pTextMenu.innerText = 'About me';
        }
        break;
      case 'studies':
        if (pTextMenu.classList[0] === 'es') {
          pTextMenu.innerText = 'Estudios';
        } else {
          pTextMenu.innerText = 'Studies';
        }
        break;
      default:
        if (pTextMenu.classList[0] === 'es') {
          pTextMenu.innerText = 'Portfolio';
        } else {
          pTextMenu.innerText = 'Portfolio';
        }
    }
  });
};

export default scrollEvent;