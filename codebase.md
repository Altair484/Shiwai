# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "new-react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "ai-digest": "^1.0.8",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-intersection-observer": "^9.16.0",
    "react-router-dom": "^7.3.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@tailwindcss/postcss": "^4.0.12",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "vite": "^6.2.0"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public\img\femme_tibetaine.jpg

This is a binary file of the type: Image

# public\img\fraiche_peche.jpg

This is a binary file of the type: Image

# public\img\iris_mamie.jpeg

This is a binary file of the type: Image

# public\img\la foi.jpg

This is a binary file of the type: Image

# public\img\la-foi.jpg

This is a binary file of the type: Image

# public\img\petite_fille_a_la_dentelle.jpg

This is a binary file of the type: Image

# public\img\yi_expo_15_aout.jpg

This is a binary file of the type: Image

# public\img\yi_expo.jpg

This is a binary file of the type: Image

# public\vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

# src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src\App.jsx

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Sketches from './pages/Sketches';
import Contact from './pages/Contact';
import './index.css'; // Fichier pour l'import de Tailwind

function App() {
  return (
    <Router>
      <div className="bg-cream min-h-screen font-inter text-dark" data-scroll-container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/aquarelles" element={<Gallery />} />
          <Route path="/croquis" element={<Sketches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
```

# src\assets\react.svg

This is a file of the type: SVG Image

# src\components\Footer.jsx

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="flex py-3 justify-center">
                <div className="flex justify-center flex-wrap">
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/about"
                    >
                        A propos
                    </Link>
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/aquarelles"
                    >
                        GALLERIe
                    </Link>
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/croquis"
                    >
                        CROQUIS
                    </Link>
                    <Link
                        className="font-inter font-light text-white custom-underline white uppercase mb-1 mx-4"
                        to="/contact"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
```

# src\components\Header.jsx

```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`fixed z-10 left-0 top-0 w-full h-header overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'h-screen bg-white' : ''}`}>
            <div className="mx-auto max-w-retina px-4">
                <div className="flex flex-wrap relative justify-between bg-white bg-opacity-90 backdrop-blur-sm">
                    {/* Logo du site */}
                    <div className="w-1/2 lg:w-2/12 lg:ml-1/12 flex items-center h-header transition-all duration-500 ease-in-out order-1 lg:order-2 lg:justify-center">
                        <Link className="font-cormorant text-base uppercase custom-underline" to="/">
                            SHIWAI
                        </Link>
                    </div>

                    {/* Menu trigger (mobile) */}
                    <div className="w-1/2 flex items-center justify-end h-header transition-all duration-500 ease-in-out order-2 lg:hidden">
                        <button
                            className="font-cormorant text-base uppercase custom-underline"
                            onClick={toggleMenu}
                        >
                            MENU
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className={`w-10/12 lg:w-5/12 h-screen-minus-header lg:h-auto pb-32 lg:pb-0 flex justify-center items-end lg:items-center lg:justify-end transition-all duration-500 ease-in-out order-3 ${menuOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                        <ul className="flex flex-col lg:flex-row mb-0">
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/about"
                                >
                                    A propos
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/aquarelles"
                                >
                                    GALLERIE
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/croquis"
                                >
                                    Croquis
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 mr-0 lg:mr-6">
                                <Link
                                    className="font-cormorant lg:font-inter text-2xl lg:text-base uppercase custom-underline"
                                    to="/contact"
                                >
                                    contact
                                </Link>
                            </li>
                            <li className="mt-9 lg:mt-0 hidden">
                                <div className="flex justify-center items-center">
                                    <span className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" className="flex">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Sélection de langue */}
                    <div className={`w-1/2 lg:w-4/12 flex items-center h-header transition-all duration-500 ease-in-out order-4 lg:order-1 justify-start ${menuOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                        <ul className="flex mb-0">
                            <li className="mr-4">
                                <a className="custom-underline text-xs lg:text-base uppercase font-inter text-dark" href="#">FR</a>
                            </li>
                            <li className="mr-4">
                                <a className="custom-underline text-xs lg:text-base uppercase font-inter text-gray" href="#">EN</a>
                            </li>
                            <li className="mr-4">
                                <a className="custom-underline text-xs lg:text-base uppercase font-inter text-gray" href="#">CN</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact email (mobile) */}
                    <div className={`w-1/2 flex items-center justify-end h-header transition-all duration-500 ease-in-out order-5 ${menuOpen ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
                        <a className="custom-underline text-xs uppercase font-inter" href="mailto:shiwai1991@gmail.com">
                            shiwai1991@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
```

# src\components\HomePage\AboutSection.jsx

```jsx
const AboutSection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <h2 className="text-h2 mb-8 md:mb-12">
                    À propos
                </h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <p className="text-body mb-6">
                            {/* Votre texte de présentation */}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-h3 mb-6">Parcours</h3>
                        <p className="text-body mb-4">
                            {/* Votre texte de parcours */}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 
```

# src\components\HomePage\ContactSection.jsx

```jsx
const ContactSection = () => {
    return (
        <section className="py-16 md:py-24 bg-cream">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <h2 className="text-h2 mb-8 md:mb-12">
                    Contact
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-body mb-8 text-center">
                        Pour toute demande d'information
                    </p>
                    {/* Votre formulaire de contact */}
                    <div className="text-caption mt-4">
                        * Champs obligatoires
                    </div>
                </div>
            </div>
        </section>
    );
}; 
```

# src\components\HomePage\GallerySection.jsx

```jsx
const GallerySection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <h2 className="text-h2 mb-8 md:mb-12">
                    Galerie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Vos items de galerie */}
                    <div className="gallery-item">
                        <h3 className="text-h4 mt-4">Titre de l'œuvre</h3>
                        <p className="text-caption mt-2">Technique, dimensions</p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 
```

# src\components\HomePage\HomePage.jsx

```jsx
import React from 'react';
import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import GallerySection from './GallerySection';
import ContactSection from './ContactSection';

const HomePage = () => {
    return (
        <main className="w-full">
            {/* Section Intro */}
            <IntroSection>
                <h1 className="text-h1 text-white mb-4 sm:mb-6">SHIWAI</h1>
                <h2 className="text-h4 text-white">aquarelles</h2>
            </IntroSection>

            {/* Section À propos */}
            <AboutSection>
                <h2 className="text-h2 mb-8 md:mb-12">À propos</h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <p className="text-body mb-6">
                            L'art de l'aquarelle est un voyage constant entre contrôle et lâcher-prise...
                        </p>
                    </div>
                    <div>
                        <h3 className="text-h3 mb-6">Parcours</h3>
                        <p className="text-body mb-4">
                            Passionnée par l'art depuis mon plus jeune âge...
                        </p>
                    </div>
                </div>
            </AboutSection>

            {/* Section Galerie */}
            <GallerySection>
                <h2 className="text-h2 mb-8 md:mb-12">Galerie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="gallery-item">
                        <h3 className="text-h4 mt-4">Titre de l'œuvre</h3>
                        <p className="text-caption mt-2">Aquarelle, 30x40cm</p>
                    </div>
                    {/* Autres items de galerie... */}
                </div>
            </GallerySection>

            {/* Section Contact */}
            <ContactSection>
                <h2 className="text-h2 mb-8 md:mb-12">Contact</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-body mb-8 text-center">
                        Pour toute demande d'information ou commande...
                    </p>
                    <form className="space-y-6">
                        {/* Champs du formulaire */}
                        <p className="text-caption mt-4">* Champs obligatoires</p>
                    </form>
                </div>
            </ContactSection>
        </main>
    );
};

export default HomePage; 
```

# src\components\HomePage\IntroSection.jsx

```jsx
const IntroSection = () => {
    return (
        <section className="relative h-[calc(100vh-160px)] overflow-hidden">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center mix-blend-difference">
                <h1 className="text-h1 text-white mb-4 sm:mb-6">
                    SHIWAI
                </h1>
                <h2 className="text-h4 text-white">
                    aquarelles
                </h2>
            </div>
            <div className="relative w-full h-full">
                <div className="w-full h-full">
                    {/* Background content */}
                </div>
            </div>
        </section>
    );
}; 
```

# src\components\Navbar.jsx

```jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex items-center">
                            <span className="text-xl font-semibold">Yi Zhang</span>
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                                Accueil
                            </Link>
                            <Link to="/about" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                                À propos
                            </Link>
                            <Link to="/aquarelles" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                                Aquarelles
                            </Link>
                            <Link to="/croquis" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                                Croquis
                            </Link>
                            <Link to="/contact" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 
```

# src\index.css

```css
/* Importations des polices */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@100;300;500;600&family=Cormorant+SC:wght@300;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;



@layer base {
  :root {
    --color-dark: #1e1e1e;
    --color-cream: #fffef7;
    --color-gray: #919191;
  }
  
  body {
    padding-top: 80px;
    max-width: 100vw;
  }
}

@layer utilities {
  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
  .fade-left {
    animation: fadeLeft 1s ease-in-out;
  }
  
  .fade-right {
    animation: fadeRight 1s ease-in-out;
  }
  
  .slide-hover {
    @apply transition-transform duration-800 ease-in-out hover:scale-[1.02];
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeLeft {
    from { 
      opacity: 0;
      transform: translateX(50px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeRight {
    from { 
      opacity: 0;
      transform: translateX(-50px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/* Vos styles personnalisés peuvent être ajoutés ici */
```

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

# src\pages\About.jsx

```jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Importation d'une image (à adapter selon votre structure de projet)
const artistPhoto = '/assets/img/yi_expo.jpg';

const About = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: bioRef, inView: bioInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-16 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">À PROPOS</h2>
                </div>

                <div className="flex flex-wrap">
                    {/* Biographie de l'artiste */}
                    <div className="w-full lg:w-1/2 lg:pr-12">
                        <div
                            ref={bioRef}
                            className={`${bioInView ? 'fade-right' : ''}`}
                        >
                            <h3 className="font-cormorant font-semibold text-3xl mb-8">Biographie</h3>

                            <div className="font-cormorant font-light responsive-h5 space-y-6">
                                <p>
                                    Née en Chine, j'ai développé très tôt une passion pour l'art, en particulier l'aquarelle.
                                    Après des études d'art à l'université, j'ai décidé de m'installer en France pour poursuivre
                                    ma carrière artistique et m'imprégner de nouvelles influences.
                                </p>

                                <p>
                                    Mon travail se concentre principalement sur trois thèmes : les portraits qui capturent l'essence
                                    des personnes, les natures mortes qui célèbrent la beauté des objets quotidiens, et les paysages
                                    qui traduisent l'atmosphère unique de lieux qui m'inspirent.
                                </p>

                                <p>
                                    L'aquarelle est pour moi le médium idéal pour exprimer la délicatesse et la profondeur
                                    des émotions. Sa transparence et sa fluidité me permettent de jouer avec la lumière et
                                    de créer des œuvres à la fois vibrantes et subtiles.
                                </p>

                                <p>
                                    Depuis quatre ans, j'expose régulièrement mon travail en France et à l'international,
                                    et j'ai eu l'honneur de recevoir plusieurs prix pour mes créations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo de l'artiste */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <div
                            ref={imageRef}
                            className={`${imageInView ? 'fade-left' : ''}`}
                        >
                            <img
                                src={artistPhoto}
                                alt="Shiwai lors d'une exposition"
                                className="w-full slide-hover mb-4"
                            />
                            <p className="font-inter text-right text-gray">
                                Exposition à la Galerie d'Art Moderne, Paris, 2022
                            </p>
                        </div>
                    </div>
                </div>

                {/* Citation de l'artiste */}
                <div className="mt-16 border-t border-dark pt-12">
                    <blockquote className="font-cormorant responsive-h4 text-center italic max-w-3xl mx-auto">
                        "L'aquarelle est comme la vie elle-même : imprévisible, fluide, et d'une beauté qui se révèle pleinement
                        dans l'acceptation de l'imperfection."
                    </blockquote>
                    <p className="text-right font-inter text-gray mt-6">— Shiwai</p>
                </div>

                {/* Parcours et expositions */}
                <div className="mt-16">
                    <h3 className="font-cormorant font-semibold text-3xl mb-8">Expositions et prix</h3>

                    <div className="space-y-6 font-inter">
                        <div className="flex flex-wrap border-b border-gray pb-4">
                            <div className="w-full md:w-1/4 font-medium">2024</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Galerie des Beaux-Arts, Lyon — <span className="italic">Exposition collective "Résonances Aquatiques"</span></p>
                                <p className="text-gray">Prix du public pour "Femme tibétaine"</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap border-b border-gray pb-4">
                            <div className="w-full md:w-1/4 font-medium">2023</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Maison de la Culture, Grenoble — <span className="italic">Exposition personnelle "Reflets et Transparences"</span></p>
                                <p className="text-gray">15 œuvres exposées, 3 mois</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap border-b border-gray pb-4">
                            <div className="w-full md:w-1/4 font-medium">2022</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Salon International de l'Aquarelle, Paris — <span className="italic">Participation</span></p>
                                <p className="text-gray">Mention spéciale du jury pour la série "Natures mortes"</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap pb-4">
                            <div className="w-full md:w-1/4 font-medium">2021</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Centre d'Art Contemporain, Marseille — <span className="italic">Exposition collective "Nouveaux Talents"</span></p>
                                <p className="text-gray">Première exposition en France</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formation */}
                <div className="mt-16 border-t border-dark pt-12">
                    <h3 className="font-cormorant font-semibold text-3xl mb-8">Formation</h3>

                    <div className="space-y-6 font-inter">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 font-medium">2018-2020</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">École des Beaux-Arts de Paris</p>
                                <p className="text-gray">Master en Arts Plastiques, spécialisation Techniques de l'Eau</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 font-medium">2014-2018</div>
                            <div className="w-full md:w-3/4">
                                <p className="mb-2">Académie des Beaux-Arts de Shanghai</p>
                                <p className="text-gray">Licence en Peinture Traditionnelle</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact rapide */}
                <div className="mt-16 text-center">
                    <h3 className="font-cormorant font-semibold text-2xl mb-6">Pour toute demande d'information ou acquisition d'œuvre</h3>
                    <a href="mailto:shiwai1991@gmail.com" className="font-inter custom-underline">shiwai1991@gmail.com</a>
                </div>
            </div>
        </main>
    );
};

export default About;
```

# src\pages\Aquarelles.jsx

```jsx
const Aquarelles = () => {
    const aquarelles = [
        {
            id: 1,
            title: "Paysage de montagne",
            image: "/assets/aquarelle1.jpg",
            description: "Aquarelle sur papier, 30x40cm"
        },
        {
            id: 2,
            title: "Vue sur la mer",
            image: "/assets/aquarelle2.jpg",
            description: "Aquarelle sur papier, 25x35cm"
        },
        {
            id: 3,
            title: "Forêt automnale",
            image: "/assets/aquarelle3.jpg",
            description: "Aquarelle sur papier, 40x50cm"
        },
        // Ajoutez d'autres aquarelles ici
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mes Aquarelles</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Découvrez ma collection d'aquarelles, où chaque œuvre raconte une histoire unique.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {aquarelles.map((aquarelle) => (
                        <article key={aquarelle.id} className="flex flex-col items-start">
                            <div className="relative w-full">
                                <img
                                    src={aquarelle.image}
                                    alt={aquarelle.title}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-6">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                        {aquarelle.title}
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600">
                                        {aquarelle.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aquarelles; 
```

# src\pages\Contact.jsx

```jsx
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: infoRef, inView: infoInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous mettriez la logique d'envoi du formulaire à votre backend
        console.log('Formulaire soumis:', formData);
        // Simuler une soumission réussie
        setFormSubmitted(true);
        // Réinitialiser le formulaire
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-16 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">CONTACT</h2>
                </div>

                <div className="flex flex-wrap">
                    {/* Formulaire de contact */}
                    <div
                        ref={formRef}
                        className={`w-full lg:w-7/12 lg:pr-12 ${formInView ? 'fade-right' : ''}`}
                    >
                        <h3 className="font-cormorant font-semibold text-3xl mb-8">Envoyez-moi un message</h3>

                        {formSubmitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-8">
                                <p className="font-inter">Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</p>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-inter text-sm font-medium mb-1">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-inter text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block font-inter text-sm font-medium mb-1">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-inter text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-dark text-white font-inter py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div
                        ref={infoRef}
                        className={`w-full lg:w-5/12 mt-12 lg:mt-0 ${infoInView ? 'fade-left' : ''}`}
                    >
                        <h3 className="font-cormorant font-semibold text-3xl mb-8">Informations de contact</h3>

                        <div className="space-y-8 font-inter">
                            <div>
                                <h4 className="font-medium text-lg mb-2">Email</h4>
                                <a href="mailto:shiwai1991@gmail.com" className="text-gray custom-underline">
                                    shiwai1991@gmail.com
                                </a>
                            </div>

                            <div>
                                <h4 className="font-medium text-lg mb-2">Atelier</h4>
                                <p className="text-gray">
                                    15 rue des Artistes<br />
                                    75014 Paris<br />
                                    France
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium text-lg mb-2">Réseaux sociaux</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray hover:text-dark transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray hover:text-dark transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray hover:text-dark transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-medium text-lg mb-2">Horaires de visite</h4>
                                <p className="text-gray">
                                    Sur rendez-vous uniquement<br />
                                    Du mardi au samedi, 10h-18h
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <h4 className="font-cormorant font-semibold text-2xl mb-4">Intéressé par mes œuvres ?</h4>
                            <p className="font-inter text-gray mb-4">
                                Pour toute demande d'acquisition ou de commande spéciale, contactez-moi directement
                                par email ou utilisez le formulaire de contact ci-contre.
                            </p>
                            <p className="font-inter text-gray">
                                Je vous répondrai dans un délai de 48 heures avec toutes les informations nécessaires.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
```

# src\pages\Gallery.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Données simulées des œuvres (à remplacer par vos données réelles)
const artworksData = [
    {
        id: 1,
        title: "Femme tibétaine",
        dimensions: "53x38 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "portrait",
        image: "/assets/img/femme_tibetaine.jpg",
    },
    {
        id: 2,
        title: "Petite fille à la dentelle",
        dimensions: "30x40 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "portrait",
        image: "/assets/img/petite_fille_a_la_dentelle.jpg",
    },
    {
        id: 3,
        title: "La foi",
        dimensions: "30x40 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "portrait",
        image: "/assets/img/la-foi.jpg",
    },
    {
        id: 4,
        title: "L'iris de mamie",
        dimensions: "40x30 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "nature-morte",
        image: "/assets/img/l_iris_de_mamie.jpeg",
    },
    {
        id: 5,
        title: "Fraîchement pêché",
        dimensions: "53x38 CM",
        year: "2022",
        technique: "AQUARELLE",
        category: "nature-morte",
        image: "/assets/img/fraiche_peche.jpg",
    },
    {
        id: 6,
        title: "Montagnes au crépuscule",
        dimensions: "50x35 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "paysage",
        image: "/assets/img/paysage1.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 7,
        title: "Rivière calme",
        dimensions: "45x30 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "paysage",
        image: "/assets/img/paysage2.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 8,
        title: "Bouquet de pivoines",
        dimensions: "35x25 CM",
        year: "2023",
        technique: "AQUARELLE",
        category: "nature-morte",
        image: "/assets/img/pivoine.jpg", // Fichier fictif, à remplacer
    }
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredArtworks, setFilteredArtworks] = useState([]);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: categoriesRef, inView: categoriesInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Effet pour filtrer les œuvres selon la catégorie active
    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredArtworks(artworksData);
        } else {
            setFilteredArtworks(artworksData.filter(artwork => artwork.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-12 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">GALLERIE</h2>
                </div>

                {/* Filtres par catégorie */}
                <div
                    ref={categoriesRef}
                    className={`flex justify-center mb-12 ${categoriesInView ? 'fade-in' : ''}`}
                >
                    <div className="inline-flex border-b border-dark">
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'all' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            Toutes
                        </button>
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'portrait' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('portrait')}
                        >
                            Portraits
                        </button>
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'nature-morte' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('nature-morte')}
                        >
                            Nature Morte
                        </button>
                        <button
                            className={`px-4 py-2 font-inter uppercase text-sm ${activeCategory === 'paysage' ? 'border-b-2 border-dark' : ''}`}
                            onClick={() => setActiveCategory('paysage')}
                        >
                            Paysages
                        </button>
                    </div>
                </div>

                {/* Grille d'œuvres */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtworks.map((artwork, index) => {
                        // Utiliser useInView pour chaque œuvre
                        const { ref, inView } = useInView({
                            triggerOnce: true,
                            threshold: 0.1,
                            delay: 100 * index, // Délai progressif pour créer un effet de cascade
                        });

                        return (
                            <div
                                key={artwork.id}
                                ref={ref}
                                className={`transition-all duration-500 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            >
                                <div className="group">
                                    <div className="overflow-hidden">
                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full transition-transform duration-800 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="font-cormorant text-lg font-medium">{artwork.title}</h3>
                                        <p className="font-inter text-sm text-gray mt-1">
                                            {artwork.dimensions} {artwork.year}<br />
                                            {artwork.technique}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Message si aucun résultat */}
                {filteredArtworks.length === 0 && (
                    <div className="text-center py-12">
                        <p className="font-inter text-gray">Aucune œuvre trouvée dans cette catégorie.</p>
                    </div>
                )}

                {/* Contact pour acquisition */}
                <div className="mt-16 text-center border-t border-dark pt-12">
                    <h3 className="font-cormorant font-medium text-2xl mb-4">Intéressé par une œuvre ?</h3>
                    <p className="font-inter mb-6 max-w-2xl mx-auto">
                        Pour toute information concernant les prix, la disponibilité ou pour une commande sur mesure,
                        n'hésitez pas à me contacter.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-dark text-white font-inter py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
                    >
                        Contactez-moi
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Gallery;
```

# src\pages\HomePage.jsx

```jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Importation des images (à adapter selon votre structure de projet)
const femmeTibetaine = '/img/femme_tibetaine.jpg';
const petiteFilleDentelle = '/img/petite_fille_a_la_dentelle.jpg';
const laFoi = '/img/la-foi.jpg';
const iris = '/img/iris_mamie.jpeg';
const fraichePeche = '/img/fraiche_peche.jpg';

const HomePage = () => {
    // Configuration des observateurs d'intersection
    const { ref: introRef, inView: introInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: portraitsRef, inView: portraitsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: firstLineRef, inView: firstLineInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: quoteSectionRef, inView: quoteSectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: secondLineRef, inView: secondLineInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: natureRef, inView: natureInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: thirdLineRef, inView: thirdLineInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main>
            {/* Introduction Section */}
            <section id="intro-section" className='relative'>
                <div
                    ref={introRef}
                    className={`flex flex-col pb-16 mix-blend-difference sticky top-[95px] ${introInView ? 'fade-in' : ''}`}
                    id="main-title-row"
                >
                    <div className="w-full">
                        <h1 className="text-center font-cormorant-sc text-h1 pb-6 text-white">SHIWAI</h1>
                    </div>
                    <div className="w-full">
                        <h2 className="text-center font-inter uppercase pb-12 text-2xl text-white">AQUARELLES</h2>
                    </div>
                </div>
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-7/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={femmeTibetaine} alt="Femme tibétaine" />
                                <p className="font-inter font-normal text-right pt-3 text-gray">
                                    Femme tibétaine<br />53x38 CM 2022<br />AQUARELLE<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portraits Section Title */}
            <section className="overflow-hidden">
                <div
                    ref={portraitsRef}
                    className={`mx-auto max-w-retina px-4 ${portraitsInView ? 'fade-left' : ''}`}
                >
                    <div className="flex">
                        <div className="w-full">
                            <h2 className="font-cormorant text-right py-12 text-h2 font-regular">Portraits</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider Line */}
            <section className="overflow-hidden">
                <div
                    ref={firstLineRef}
                    className={`mx-auto max-w-retina px-4 ${firstLineInView ? 'fade-right' : ''}`}
                >
                    <div className="flex">
                        <div className="w-8/12 border-t border-dark">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portraits Content Section */}
            <section>
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex flex-wrap justify-end pt-12 gap-4">
                        <div className="w-full lg:w-6/12 lg:ml-1/12">
                            <p className={`font-cormorant font-light py-3 text-body sticky top-[95px] ${firstLineInView ? 'fade-right' : ''}`}>
                                L'aquarelle capture l'essence de l'âme à travers des couleurs douces et des dégradés subtils.
                                Dans mes portraits, j'immortalise l'émotion et la beauté intérieure de mes sujets.
                                Chaque coup de pinceau dévoile une histoire, chaque nuance révèle une personnalité.
                            </p>
                        </div>

                        <div className="w-full lg:w-5/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={petiteFilleDentelle} alt="Petite fille à la dentelle" />
                                <p className={`font-inter font-normal text-right pt-3 text-gray ${firstLineInView ? 'fade-right' : ''}`}>
                                    Petite fille à la dentelle<br />30x40 CM 2022<br />Aquarelle
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section
                ref={quoteSectionRef}
                className={`${quoteSectionInView ? 'fade-in' : ''}`}
            >
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex pt-12 gap-4">
                        <div className="w-full lg:w-5/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={laFoi} alt="La foi" />
                                <p className={`font-inter font-normal text-right pt-3 text-gray ${quoteSectionInView ? 'fade-right' : ''}`}>
                                    La foi<br />30x40 CM 2022<br />Aquarelle
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12">
                            <p className="sticky top-[95px] font-cormorant font-light py-3 text-h3 text-right">
                                L'aquarelle capture le temps, à la fois le moment présent dans le dessin et le moment du dessin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider Line */}
            <section>
                <div
                    ref={secondLineRef}
                    className={`mx-auto max-w-retina px-4 ${secondLineInView ? 'fade-right' : ''}`}
                >
                    <div className="flex pb-12">
                        <div className="w-8/12 border-t border-dark">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nature Morte Section */}
            <section>
                <div
                    ref={natureRef}
                    className={`mx-auto max-w-retina px-4 ${natureInView ? 'fade-right' : ''}`}
                >
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full lg:w-5/12">
                            <h2 className="font-cormorant text-left py-12 text-h2 font-regular">Nature<br />Morte</h2>
                            <img className="w-full slide-hover" src={iris} alt="L'iris de mamie" />
                        </div>

                        <div className="w-full lg:w-6/12 lg:ml-1/12">
                            <p className={`font-cormorant font-light text-body py-3 sticky top-[95px] ${natureInView ? 'fade-left' : ''}`}>
                                Je célèbre la beauté éphémère de la nature figée dans le temps.
                                Chaque objet inanimé devient un sujet vibrant et captivant, révélant ses textures délicates et ses nuances subtiles.
                                Chaque pétale, chaque feuille, chaque fruit est immortalisé.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section */}
            <section className="overflow-hidden">
                <div className="mx-auto max-w-retina px-4">
                    <div className="flex justify-end">
                        <div
                            ref={thirdLineRef}
                            className={`w-6/12 border-t border-dark ${thirdLineInView ? 'fade-left' : ''}`}
                        >
                            <span></span>
                        </div>
                    </div>

                    <div className="flex justify-end pt-12">
                        <div className="w-full lg:w-8/12 lg:ml-4/12">
                            <div className="mb-8">
                                <img className="w-full slide-hover" src={fraichePeche} alt="Fraîchement pêché" />
                                <p className={`font-inter font-normal text-right pt-3 text-gray ${thirdLineInView ? 'fade-right' : ''}`}>
                                    Fraîchement pêché<br />53x38 CM 2022<br />Aquarelle
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex pb-12">
                        <div className="w-8/12">
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
```

# src\pages\Sketches.jsx

```jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Données simulées des croquis (à remplacer par vos données réelles)
const sketchesData = [
    {
        id: 1,
        title: "Étude de visage",
        year: "2023",
        technique: "CRAYON GRAPHITE",
        image: "/assets/img/croquis1.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 2,
        title: "Main en mouvement",
        year: "2023",
        technique: "FUSAIN",
        image: "/assets/img/croquis2.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 3,
        title: "Carnet de voyage - Paris",
        year: "2022",
        technique: "ENCRE",
        image: "/assets/img/croquis3.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 4,
        title: "Étude de drapé",
        year: "2022",
        technique: "CRAYON GRAPHITE",
        image: "/assets/img/croquis4.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 5,
        title: "Figure assise",
        year: "2023",
        technique: "SANGUINE",
        image: "/assets/img/croquis5.jpg", // Fichier fictif, à remplacer
    },
    {
        id: 6,
        title: "Exploration anatomique",
        year: "2022",
        technique: "FUSAIN ET CRAIE BLANCHE",
        image: "/assets/img/croquis6.jpg", // Fichier fictif, à remplacer
    },
];

const Sketches = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: introRef, inView: introInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="pt-12 pb-16">
            <div className="mx-auto max-w-retina px-4">
                {/* Titre de la page */}
                <div
                    ref={titleRef}
                    className={`mb-12 ${titleInView ? 'fade-in' : ''}`}
                >
                    <h1 className="font-cormorant-sc responsive-h1 text-center mb-6">SHIWAI</h1>
                    <h2 className="font-inter uppercase text-center responsive-subtitle">CROQUIS</h2>
                </div>
            </div>
        </main>
    );
};

export default Sketches;
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        cream: 'var(--color-cream)',
        gray: 'var(--color-gray)',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'cormorant-sc': ['"Cormorant SC"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'retina': '1600px',
      },
      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
      },
      height: {
        'header': '80px',
        'screen-minus-header': 'calc(100vh - 160px)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-h1': {
          '@apply font-cormorant-sc text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium': {},
        },
        '.text-h2': {
          '@apply font-cormorant-sc text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium': {},
        },
        '.text-h3': {
          '@apply font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light': {},
        },
        '.text-h4': {
          '@apply font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light': {},
        },
        '.text-body': {
          '@apply font-cormorant text-base sm:text-lg md:text-xl lg:text-3xl font-light': {},
        },
        '.text-caption': {
          '@apply font-cormorant text-sm sm:text-base md:text-lg font-light': {},
        }
      })
    }
  ],
  corePlugins: {
    container: false
  },
}
```

# vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

