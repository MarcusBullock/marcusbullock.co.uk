import * as classNames from 'classnames';
import styles from './DarkModeToggle.module.css';
import Sun from '../../../assets/images/sun.svg';
import Moon from '../../../assets/images/moon.svg';
import { ReactSVG } from 'react-svg';

function DarkModeToggle({ theme, toggleTheme }) {
    return (
        <div
            className={classNames(
                styles.icon,
                theme === 'light' ? styles.lightHover : styles.darkHover
            )}
            onClick={toggleTheme}
        >
            {theme === 'light' ? (
                <span className={styles.moon}>
                    <ReactSVG src={Moon} />
                </span>
            ) : (
                <span className={styles.sun}>
                    <ReactSVG src={Sun} />
                </span>
            )}
        </div>
    );
}

export default DarkModeToggle;
