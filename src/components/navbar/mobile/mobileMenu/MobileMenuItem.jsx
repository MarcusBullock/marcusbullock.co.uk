import classNames from 'classnames';
import styles from './MobileMenuItem.module.css';

function MobileMenuItem({ title, setActive, toggle, setToggle, theme }) {
    return (
        <li
            className={classNames(
                styles.fitContent,
                theme === 'light' ? styles.lightHover : styles.darkHover
            )}
        >
            <a onClick={(e) => handleClick(e)}>{title}</a>
        </li>
    );

    function handleClick(event) {
        event.preventDefault();
        setToggle(!toggle);
        setActive(title);
    }
}

export default MobileMenuItem;
