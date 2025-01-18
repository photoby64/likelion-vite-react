import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
import App from '@/app';
import Homework from '@/components/homework';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Homework />
    </StrictMode>
  );
}
