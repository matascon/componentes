import './style.css';
import { InitializeParticles } from './src/components/Particles/InitializeParticles.js';
import { Navbar } from './src/components/Navbar/Navbar.js';
import { Main } from './src/components/Main/Main.js';
import { Footer } from './src/components/Footer/Footer.js';
import translator from './src/Translator/translator.js';
import iconEvent from './src/components/Navbar/iconEvent.js';
import scrollEvent from './src/ScrollEvent/scrollEvent.js';

InitializeParticles();
Navbar();
Main();
Footer();
translator();
iconEvent();
scrollEvent();