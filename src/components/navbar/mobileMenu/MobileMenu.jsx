import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './MobileMenu.module.css';
import MobileMenuItem from './MobileMenuItem';

function MobileMenu({ theme, isOpen, setMenuIsOpen }) {
    return (
        <div className={styles.menuContainer}>
            <ul
                className={classNames(
                    styles.mobileMenu,
                    isOpen ? styles.active : ''
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
                <MobileMenuItem title="ABOUT" theme={theme} />
                <MobileMenuItem title="PROJECTS" theme={theme} />
                <MobileMenuItem title="CONTACT" theme={theme} />
            </ul>
        </div>
    );
}

export default MobileMenu;
