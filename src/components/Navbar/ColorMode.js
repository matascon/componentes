import './ColorMode.css';

export const ColorMode = () => {
  const divColorMode = document.createElement('div');
  const button = document.createElement('button');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  use.setAttribute('href', '/assetsNavbar.svg#sun');
  svg.appendChild(use);
  svg.classList.add('icon-color-mode');
  svg.classList.add('dark');
  button.appendChild(svg);
  divColorMode.appendChild(button);
  divColorMode.classList.add('color-mode');

  button.addEventListener("click", () => {
    if (svg.classList[1] === 'dark') {
      use.setAttribute('href', '/assetsNavbar.svg#moon');
      svg.classList.remove('dark');
      svg.classList.add('light');
      document.body.style.backgroundColor = 'var(--background-light)';
    } else {
      use.setAttribute('href', '/assetsNavbar.svg#sun');
      svg.classList.remove('light');
      svg.classList.add('dark');
      document.body.style.backgroundColor = 'var(--background-dark)';
    }
  });

  return divColorMode;
};