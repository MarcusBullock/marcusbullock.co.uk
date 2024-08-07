import LogoLight from '../../../../src/assets/images/logo-lightmode.png';
import LogoDark from '../../../../src/assets/images/logo-darkmode.png';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo({ theme, setActiveTabName }) {
    return (
        <Link
            to="/"
            className={styles.logo}
            onClick={() => {
                setActiveTabName('');
                window.scrollTo(0, 0);
            }}
        >
            <img
                className={styles.logoImg}
                src={theme === 'light' ? LogoLight : LogoDark}
                alt="logo"
            />
        </Link>
    );
}

export default Logo;
