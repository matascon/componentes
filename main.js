import './style.css';
import { InitializeParticles } from './src/components/Particles/InitializeParticles.js';
import { Navbar } from './src/components/Navbar/Navbar.js';
import { Main } from './src/components/Main/Main.js';

import { Translator } from './src/Translator/Translator.js';


InitializeParticles();
Navbar();
Main();

Translator();