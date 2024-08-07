import styles from './Navbar.module.css';
import { useState } from 'react';
import DarkModeToggle from './darkMode/DarkModeToggle';
import MobileMenu from './mobile/mobileMenu/MobileMenu';
import MobileMenuButton from './mobile/mobileMenu/MobileMenuButton';
import Logo from './logo/Logo';
import NavbarItems from './navbarItems/NavbarItems';
import Mobile from './mobile/Mobile';

function Navbar({ theme, toggleTheme }) {
    const [activeTabName, setActiveTabName] = useState('');
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Logo theme={theme} setActiveTabName={setActiveTabName} />
                <NavbarItems
                    activeTabName={activeTabName}
                    setActiveTabName={setActiveTabName}
                    toggleTheme={toggleTheme}
                    theme={theme}
                />
                <Mobile
                    theme={theme}
                    toggleTheme={toggleTheme}
                    menuIsOpen={menuIsOpen}
                    setMenuIsOpen={setMenuIsOpen}
                    setActiveTabName={setActiveTabName}
                />
            </div>
        </nav>
    );
}

export default Navbar;
