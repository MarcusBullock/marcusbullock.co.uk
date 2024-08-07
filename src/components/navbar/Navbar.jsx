import LogoLight from '../../../src/assets/images/logo-lightmode.png';
import LogoDark from '../../../src/assets/images/logo-darkmode.png';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';
import DarkModeToggle from './darkMode/DarkModeToggle';
import * as classNames from 'classnames';
import MobileMenu from './mobileMenu/MobileMenu';
import MobileMenuButton from './mobileMenu/MobileMenuButton';

function Navbar({ theme, toggleTheme }) {
    const [activeTabName, setActiveTabName] = useState('');
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link
                    to="/"
                    className={styles.logoLink}
                    onClick={() => {
                        setActiveTabName('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        className={styles.logoImg}
                        src={theme === 'light' ? LogoLight : LogoDark}
                        alt="logo"
                    />
                </Link>
                <ul className={styles.navLinks}>
                    <li
                        className={classNames(
                            activeTabName === 'ABOUT'
                                ? styles.navLinkActive
                                : styles.navLinkInactive,
                            styles.navLink,
                            styles.link
                        )}
                        onClick={() => setActiveTabName('ABOUT')}
                    >
                        <a href="#ABOUT">ABOUT</a>
                    </li>
                    <li
                        className={classNames(
                            activeTabName === 'PROJECTS'
                                ? styles.navLinkActive
                                : styles.navLinkInactive,
                            styles.navLink,
                            styles.link
                        )}
                        onClick={() => setActiveTabName('PROJECTS')}
                    >
                        <a href="#PROJECTS">PROJECTS</a>
                    </li>
                    <li
                        className={classNames(
                            activeTabName === 'CONTACT'
                                ? styles.navLinkActive
                                : styles.navLinkInactive,
                            styles.navLink,
                            styles.link
                        )}
                        onClick={() => setActiveTabName('CONTACT')}
                    >
                        <a href="#CONTACT">CONTACT</a>
                    </li>
                    <li>
                        <DarkModeToggle
                            theme={theme}
                            toggleTheme={toggleTheme}
                        />
                    </li>
                </ul>
                {/* mobile */}
                <div className={styles.mobile}>
                    {menuIsOpen ? (
                        <MobileMenu
                            theme={theme}
                            show={menuIsOpen}
                            setMenuIsOpen={setMenuIsOpen}
                        />
                    ) : (
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
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
