'use client';
import React, { createContext, useState } from 'react';

export const ToggleContext = createContext({
    toggle: () => {},
    isOpen: false
});

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <ToggleContext.Provider value={{ toggle, isOpen }}>
            {children}
        </ToggleContext.Provider>
    );
};
