import { useState } from 'react';

export const useMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
    const openMenu = () => setMenuOpen(true);

    return { menuOpen, toggleMenu, closeMenu, openMenu };
};