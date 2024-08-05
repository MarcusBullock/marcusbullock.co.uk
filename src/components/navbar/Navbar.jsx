import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import LogoLight from '../../../src/assets/logo-for-lightmode.png';
import LogoDark from '../../../src/assets/logo-for-darkmode.png';
import MenuDark from '../../../src/assets/mobile-menu-darkmode.png';
import MenuLight from '../../../src/assets/mobile-menu-lightmode.png';
import styles from './Navbar.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

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
                    <div className={styles.buttons}>
                        <div
                            className={classNames(
                                styles.icon,
                                theme === 'light'
                                    ? styles.lightHover
                                    : styles.darkHover
                            )}
                            onClick={toggleTheme}
                        >
                            <FontAwesomeIcon
                                className={
                                    theme === 'dark'
                                        ? styles.padSun
                                        : styles.padMoon
                                }
                                icon={theme === 'light' ? faMoon : faSun}
                                size="2xl"
                            />
                        </div>
                        <a
                            className={classNames(
                                styles.menu,
                                theme === 'light'
                                    ? styles.lightHover
                                    : styles.darkHover
                            )}
                            onClick={() => setMenuIsOpen(!menuIsOpen)}
                        >
                            <img
                                height={34}
                                width={34}
                                src={theme === 'light' ? MenuLight : MenuDark}
                                alt="logo"
                            />
                        </a>
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
