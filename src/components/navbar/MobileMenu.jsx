import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './MobileMenu.module.css';

function MobileMenu({ isOpen, setMenuIsOpen }) {
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
                        className={styles.btn}
                        onClick={() => setMenuIsOpen(false)}
                    >
                        <FontAwesomeIcon icon={faX} color="#121212" />
                    </a>
                </li>
                <li>
                    <a>ABOUT</a>
                </li>
                <li>
                    <a>PROJECTS</a>
                </li>
                <li>
                    <a>CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
