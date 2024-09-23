//App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from './pages/public/publicRouter';

const App = () => {
    return (
        <BrowserRouter>
            <PublicRouter />
        </BrowserRouter>
    );
    };

export default App;