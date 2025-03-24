
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Récupère l'élément racine et crée le root React
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Rend l'application
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
