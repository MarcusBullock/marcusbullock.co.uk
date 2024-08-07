import DarkModeToggle from '../darkMode/DarkModeToggle';
import styles from './Mobile.module.css';
import MobileMenu from './mobileMenu/MobileMenu';
import MobileMenuButton from './mobileMenu/MobileMenuButton';

function Mobile({
    setActiveTabName,
    menuIsOpen,
    setMenuIsOpen,
    theme,
    toggleTheme,
}) {
    return (
        <div className={styles.mobile}>
            {menuIsOpen ? (
                <MobileMenu
                    setActive={setActiveTabName}
                    theme={theme}
                    show={menuIsOpen}
                    setMenuIsOpen={setMenuIsOpen}
                />
            ) : (
                <div className={styles.buttons}>
                    <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
                    <MobileMenuButton
                        menuIsOpen={menuIsOpen}
                        setMenuIsOpen={setMenuIsOpen}
                        theme={theme}
                    />
                </div>
            )}
        </div>
    );
}

export default Mobile;
