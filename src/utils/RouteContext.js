import React, { createContext, useContext } from 'react';

const RouteEnum = {
    HOME: '/',
    ABOUT: '/about',
    PROJECTS: '/projects',
    CONTACT: '/contact',
};

const RouteContext = createContext(null);

export const RouteProvider = ({ children }) => {
    const determineRoute = (route) => {
        const url = window.location.href;
        const basePath = '';
        const resolvedRoute = Object.values(RouteEnum).includes(route) ? route : '';
        return `${basePath}${resolvedRoute}`;
    };

    // Ensure that the context is not undefined
    if (!children) {
        console.error("RouteProvider must have children");
        return null;
    }

    return (
        <RouteContext.Provider value={{ determineRoute, RouteEnum }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => {
    const context = useContext(RouteContext);
    if (!context) {
        throw new Error("useRoute must be used within a RouteProvider");
    }
    return context;
};