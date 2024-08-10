import classNames from 'classnames';
import { BallCanvas } from './ball/index.js';
import styles from './Technology.module.css';

const Technology = ({ tech, theme }) => {
    return (
        <div className={styles.technology} key={tech.name}>
            <div
                className={classNames(
                    styles.ball,
                    theme === 'light' ? styles.light : styles.dark
                )}
            >
                <BallCanvas icon={tech.icon} />
                <div className={styles.name}>{tech.name}</div>
            </div>
        </div>
    );
};

export default Technology;
