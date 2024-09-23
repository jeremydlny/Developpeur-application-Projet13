import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/public/Home';
import Login from '@/pages/public/Login';
import Profil from '@/pages/public/Profil';
import Layout from '@/layout/layout';

const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="profil" element={<Profil />} />
            </Route>
        </Routes>
    );
}

export default PublicRouter;