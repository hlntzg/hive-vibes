// src/main.tsx
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { StrictMode } from 'react';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
