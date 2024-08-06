import Navbar from './components/navbar/Navbar';
import * as classNames from 'classnames';
import styles from './index.css?inline';
import { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';

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
        <div className={classNames(`App ${theme}`, styles.container)}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main>
                <Hero theme={theme} />
            </main>
        </div>
    );
}

export default App;
