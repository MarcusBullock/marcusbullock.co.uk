import * as classNames from 'classnames';
import styles from './MobileMenuItem.module.css';

function MobileMenuItem({ title, onClick, theme }) {
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
        onClick();
    }
}

export default MobileMenuItem;
