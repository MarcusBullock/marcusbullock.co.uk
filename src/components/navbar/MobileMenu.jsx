import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './MobileMenu.module.css';

function MobileMenu({ theme, isOpen, setMenuIsOpen }) {
    return (
        <div className={styles.menuContainer}>
            <ul
                className={classNames(
                    styles.mobileMenu,
                    isOpen ? styles.active : ''
                )}
            >
                <li className={styles.menuLink}>
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
                <li
                    className={classNames(
                        styles.menuLink,
                        styles.fitContent,
                        theme === 'light' ? styles.lightHover : styles.darkHover
                    )}
                >
                    <a>ABOUT</a>
                </li>
                <li
                    className={classNames(
                        styles.menuLink,
                        styles.fitContent,
                        theme === 'light' ? styles.lightHover : styles.darkHover
                    )}
                >
                    <a>PROJECTS</a>
                </li>
                <li
                    className={classNames(
                        styles.fitContent,
                        styles.menuLink,
                        theme === 'light' ? styles.lightHover : styles.darkHover
                    )}
                >
                    <a>CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
