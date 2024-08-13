import classNames from 'classnames';
import styles from './MobileMenuItem.module.css';
import { useNavigate } from 'react-router-dom';

function MobileMenuItem({ title, setToggle, theme }) {
    const navigate = useNavigate();
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
        setToggle(false);
        const element = document.getElementById(title);
        element?.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

export default MobileMenuItem;
