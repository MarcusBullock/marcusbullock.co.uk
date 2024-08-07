//import Navbar from './components/navbar/Navbar';
import styles from './index.css?inline';
import { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

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
                {/* <Navbar toggleTheme={toggleTheme} theme={theme} /> */}
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <main>
                    <Hero theme={theme} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
