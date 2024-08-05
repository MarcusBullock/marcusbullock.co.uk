import Navbar from './components/navbar/Navbar';
import * as classNames from 'classnames';
import styles from './index.css?inline';
import { useEffect, useState } from 'react';

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
            <main style={{ backgroundColor: 'grey' }}></main>
        </div>
    );
}

export default App;
