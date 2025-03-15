import React, { useState } from 'react';
import './App.css'

import HomePage from './screens/home/HomePage';
import AboutPage from './screens/about/AboutPage';
import ProjectsPage from './screens/projects/ProjectsPage';
import ContactPage from './screens/contact/ContactPage';

import { ScreenContainerProvider } from './utils/ScreenContainerContext';
import { RouteProvider } from './utils/RouteContext';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <RouteProvider>
            <div className="portfolio">
                <ScreenContainerProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </ScreenContainerProvider>
            </div>
        </RouteProvider>
    );
}

export default App;
