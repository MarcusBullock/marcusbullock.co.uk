import { useEffect, useState } from 'react';

export function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        console.log(savedTheme);
        return savedTheme !== null ? JSON.parse(savedTheme) : 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return [theme, toggleTheme];
}
