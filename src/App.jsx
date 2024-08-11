import { BrowserRouter } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import { useState } from 'react';
import Technologies from './components/technologies/Technologies';
import Cards from './components/about/cards/Cards';
import { skills } from './constants/constants';

function App() {
    const [theme, setTheme] = useState('light');
    return (
        <BrowserRouter>
            <main>
                <div className={`App ${theme}`}>
                    <div>
                        <Navbar toggleTheme={toggleTheme} theme={theme} />
                        <Hero theme={theme} />
                    </div>
                    <div className="about">
                        <About theme={theme} />
                        <Cards skills={skills} />
                    </div>

                    <div
                        className={`tech ${
                            theme === 'light' ? 'imageLight' : 'imageDark'
                        }`}
                    >
                        <Technologies theme={theme} />
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );

    function toggleTheme() {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    }
}

export default App;
