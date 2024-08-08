import { BrowserRouter } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState('light');
    return (
        <BrowserRouter>
            <div className={`App ${theme}`}>
                <main>
                    <Navbar toggleTheme={toggleTheme} theme={theme} />
                    <Hero theme={theme} />
                    <div className="about">
                        <About theme={theme} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );

    function toggleTheme() {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    }
}

export default App;
