import classNames from 'classnames';
import styles from './NavbarItem.module.css';

function NavbarItem({ title, isSelected, setSelectedTab, theme }) {
    return (
        <li
            className={classNames(
                styles.navbarItem,
                styles.underlineAnimation,
                isSelected ? styles.isSelected : '',
                theme === 'light' ? styles.lightHover : styles.darkHover
            )}
        >
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab(title);
                }}
            >
                {title}
            </a>
        </li>
    );
}

export default NavbarItem;
