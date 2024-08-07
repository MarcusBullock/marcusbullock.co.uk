import LogoLight from '../../../src/assets/images/logo-for-lightmode.png';
import LogoDark from '../../../src/assets/images/logo-for-darkmode.png';
import { useContext, useState } from 'react';
import MobileMenu from './mobileMenu/MobileMenu';
import DarkModeToggle from './darkMode/DarkModeToggle';
import MobileMenuButton from './mobileMenu/MobileMenuButton';
import NavbarItems from './NavbarItems';
import * as classNames from 'classnames';
import styles from './Navbar.module.css';
import SelectedTabContext from '../../context/SelectedTabContext';

function Navbar({ theme, toggleTheme }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { selectedTab, setSelectedTab } = useContext(SelectedTabContext);
    return (
        <>
            <nav
                className={classNames(
                    styles.navbar,
                    menuIsOpen ? '' : styles.sticky
                )}
            >
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
                            setSelectedTab={setSelectedTab}
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
