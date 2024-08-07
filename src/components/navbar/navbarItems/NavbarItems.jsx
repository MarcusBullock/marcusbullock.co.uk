import DarkModeToggle from '../darkMode/DarkModeToggle';
import * as classNames from 'classnames';
import styles from './NavbarItems.module.css';
import NavbarItem from './navbarItem/NavbarItem';

function NavbarItems({ activeTabName, setActiveTabName, theme, toggleTheme }) {
    function getItemStyles(title) {
        return classNames(
            activeTabName === title
                ? styles.navLinkActive
                : styles.navLinkInactive,
            styles.navLink,
            styles.link
        );
    }
    return (
        <ul className={styles.navbarItems}>
            <NavbarItem
                key="ABOUT"
                className={getItemStyles('ABOUT')}
                title="ABOUT"
                setActiveTabName={() => setActiveTabName('ABOUT')}
            />
            <NavbarItem
                key="PROJECTS"
                className={getItemStyles('PROJECTS')}
                title="PROJECTS"
                setActiveTabName={() => setActiveTabName('PROJECTS')}
            />
            <NavbarItem
                key="CONTACT"
                className={getItemStyles('CONTACT')}
                title="CONTACT"
                setActiveTabName={() => setActiveTabName('CONTACT')}
            />
            <li>
                <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
            </li>
        </ul>
    );
}

export default NavbarItems;
