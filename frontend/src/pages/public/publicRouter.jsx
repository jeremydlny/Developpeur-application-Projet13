import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Login from '../../components/Login';
import Profil from '../../components/Profil';
import Layout from '../../layout/layout';

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