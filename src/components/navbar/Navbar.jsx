import LogoLight from '../../../src/assets/images/logo-for-lightmode.png';
import LogoDark from '../../../src/assets/images/logo-for-darkmode.png';
import styles from './Navbar.module.css';
import { useState } from 'react';
import MobileMenu from './mobileMenu/MobileMenu';
import DarkModeToggle from './darkMode/DarkModeToggle';
import MobileMenuButton from './mobileMenu/MobileMenuButton';
import NavbarItems from './NavbarItems';

function Navbar({ theme, toggleTheme }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>
                        <img
                            src={theme === 'light' ? LogoLight : LogoDark}
                            alt="logo"
                        />
                        <span className={styles.logoText}>arcus</span>
                    </div>
                    <NavbarItems theme={theme} toggleTheme={toggleTheme} />
                    <div className={styles.buttons}>
                        <DarkModeToggle
                            theme={theme}
                            toggleTheme={toggleTheme}
                        />
                        <MobileMenuButton
                            menuIsOpen={menuIsOpen}
                            setMenuIsOpen={setMenuIsOpen}
                            theme={theme}
                        />
                    </div>
                </div>
            </nav>
            {menuIsOpen && (
                <MobileMenu
                    theme={theme}
                    show={menuIsOpen}
                    setMenuIsOpen={setMenuIsOpen}
                />
            )}
        </>
    );
}

export default Navbar;
