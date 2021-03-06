import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import AccountView from './views/account/AccountView';
import DashboardView from './views/DashboardView';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';
import ServiceListView from './views/services/ServiceListView';
import RegisterView from './views/auth/RegisterView';
import SettingsView from './views/settings/SettingsView';

const routes =  (isLoggedIn, loginHandler) => [
    {
        path: 'app',
        element: isLoggedIn ? <DashboardLayout loginHandler={loginHandler}/> : <Navigate to={"/login"} />,
        children: [
            { path: 'dashboard', element: <DashboardView /> },
            { path: 'account', element: <AccountView /> },
            { path: 'services', element: <ServiceListView /> },
            { path: 'settings', element: <SettingsView /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    },
    {
        path: '/',
        element: !isLoggedIn ? <MainLayout /> : <Navigate to={"app/dashboard"} />,
        children: [
            { path: 'login', element: <LoginView loginHandler={loginHandler} /> },
            { path: 'register', element: <RegisterView /> },
            { path: '404', element: <NotFoundView /> },
            { path: '/', element: <Navigate to="/login" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
];

export default routes;
