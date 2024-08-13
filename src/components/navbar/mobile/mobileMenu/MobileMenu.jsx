import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import MobileMenuItem from './MobileMenuItem';
import classNames from 'classnames';
import styles from './MobileMenu.module.css';

function MobileMenu({ theme, menuIsOpen, setActiveTabName, setMenuIsOpen }) {
    return (
        <div className={styles.menuContainer}>
            <ul
                className={classNames(
                    styles.mobileMenu,
                    menuIsOpen ? styles.mobileMenuOpen : styles.mobileMenuClose
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
                    title="about"
                    theme={theme}
                    setToggle={setMenuIsOpen}
                    setActive={setActiveTabName}
                />
                <MobileMenuItem
                    title="projects"
                    theme={theme}
                    setToggle={setMenuIsOpen}
                    setActive={setActiveTabName}
                />
                <MobileMenuItem
                    title="contact"
                    theme={theme}
                    setToggle={setMenuIsOpen}
                    setActive={setActiveTabName}
                />
            </ul>
        </div>
    );
}

export default MobileMenu;
