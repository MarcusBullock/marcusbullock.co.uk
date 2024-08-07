import MenuLight from '../../../../assets/images/mobile-menu-lightmode.png';
import MenuDark from '../../../../assets/images/mobile-menu-darkmode.png';
import classNames from 'classnames';
import styles from './MobileMenuButton.module.css';

function MobileMenuButton({ theme, menuIsOpen, setMenuIsOpen }) {
    return (
        <a
            className={classNames(
                styles.menuButton,
                theme === 'light' ? styles.lightHover : styles.darkHover
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
    );
}

export default MobileMenuButton;
