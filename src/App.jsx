import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import styles from './index.css?inline';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <BrowserRouter>
            <div className={`App ${theme}`}>
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <main>
                    <Hero theme={theme} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
