import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactApp from './components/ReactApp';

const rootElement = document.getElementById('react-app');

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <ReactApp />
        </React.StrictMode>
    );
}
