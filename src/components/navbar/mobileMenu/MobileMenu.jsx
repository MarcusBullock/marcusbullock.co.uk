import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './MobileMenu.module.css';
import MobileMenuItem from './MobileMenuItem';
import SelectedTabContext from '../../../context/SelectedTabContext';
import { useContext } from 'react';

function MobileMenu({ theme, isOpen, setMenuIsOpen }) {
    // eslint-disable-next-line no-unused-vars
    const { selectedTab, setSelectedTab } = useContext(SelectedTabContext);
    return (
        <div className={styles.menuContainer}>
            <ul
                className={classNames(
                    styles.mobileMenu,
                    isOpen ? styles.mobileMenuOpen : styles.mobileMenuClose
                )}
            >
                <li>
                    <a
                        className={classNames(
                            styles.btn,
                            theme === 'light'
                                ? styles.lightHover
                                : styles.darkHover
                        )}
                        onClick={() => setMenuIsOpen(false)}
                    >
                        <FontAwesomeIcon icon={faX} size="xs" />
                    </a>
                </li>
                <MobileMenuItem
                    title="ABOUT"
                    theme={theme}
                    setSelectedTab={setSelectedTab}
                />
                <MobileMenuItem
                    title="PROJECTS"
                    theme={theme}
                    setSelectedTab={setSelectedTab}
                />
                <MobileMenuItem
                    title="CONTACT"
                    theme={theme}
                    setSelectedTab={setSelectedTab}
                />
            </ul>
        </div>
    );
}

export default MobileMenu;
