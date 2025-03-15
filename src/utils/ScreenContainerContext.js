import React, { createContext, useContext } from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const ScreenContainerContext = createContext(null);

export const ScreenContainerProvider = ({ children }) => {

    // Ensure that the context is not undefined
    if (!children) {
        console.error("RouteProvider must have children");
        return null;
    }

    return (
        <ScreenContainerContext.Provider>
            <Header />
            {children}
            <Footer />
        </ScreenContainerContext.Provider>
    );
};