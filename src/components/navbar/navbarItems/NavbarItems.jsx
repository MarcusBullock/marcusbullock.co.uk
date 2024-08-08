import DarkModeToggle from '../darkMode/DarkModeToggle';
import classNames from 'classnames';
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
                key="about"
                className={getItemStyles('about')}
                title="about"
                setActiveTabName={() => setActiveTabName('about')}
            />
            <NavbarItem
                key="projects"
                className={getItemStyles('projects')}
                title="projects"
                setActiveTabName={() => setActiveTabName('projects')}
            />
            <NavbarItem
                key="contact"
                className={getItemStyles('contact')}
                title="contact"
                setActiveTabName={() => setActiveTabName('contact')}
            />
            <li>
                <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
            </li>
        </ul>
    );
}

export default NavbarItems;
