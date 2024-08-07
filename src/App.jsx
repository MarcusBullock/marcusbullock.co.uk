import { BrowserRouter } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
    const [theme, toggleTheme] = useDarkMode();

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
