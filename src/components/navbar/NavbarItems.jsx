import { useContext } from 'react';
import NavbarItem from './NavbarItem';
import SelectedTabContext from '../../context/SelectedTabContext';
import DarkModeToggle from './darkMode/DarkModeToggle';
import styles from './NavbarItems.module.css';

function NavbarItems({ theme, toggleTheme }) {
    const { selectedTab, setSelectedTab } = useContext(SelectedTabContext);
    return (
        <ul className={styles.links}>
            <NavbarItem
                title="ABOUT"
                isSelected={selectedTab === 'ABOUT'}
                setSelectedTab={setSelectedTab}
            />
            <NavbarItem
                title="PROJECTS"
                isSelected={selectedTab === 'PROJECTS'}
                setSelectedTab={setSelectedTab}
            />
            <NavbarItem
                title="CONTACT"
                isSelected={selectedTab === 'CONTACT'}
                setSelectedTab={setSelectedTab}
            />
            <li>
                <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
            </li>
        </ul>
    );
}

export default NavbarItems;
