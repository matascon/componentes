import './Particles.css';

export const InitializeParticles = () => {
  const divParicles = document.createElement('div');
  divParicles.id = 'particles-js';

  const divContainer = document.createElement('div');
  divContainer.id = 'container';
  divContainer.classList.add('dark-container');
  
  const particlesMinJs = document.createElement('script');
  particlesMinJs.src = '/src/components/Particles/particles.min.js';
  
  particlesMinJs.onload = () => {
    const particlesJs = document.createElement('script');
    particlesJs.src = '/src/components/Particles/particles.js';

    document.body.appendChild(particlesJs);
  };

  document.body.appendChild(divParicles);
  document.body.appendChild(divContainer);
  document.body.appendChild(particlesMinJs);
}