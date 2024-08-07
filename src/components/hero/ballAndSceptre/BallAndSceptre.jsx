import classNames from 'classnames';
import styles from './BallAndSceptre.module.css';

function BallAndSceptre({ theme }) {
    return (
        <div className={styles.ballAndSceptre}>
            <div
                className={classNames(
                    styles.ball,
                    theme === 'light' ? styles.ballLight : styles.ballDark
                )}
            ></div>
            <div
                className={classNames(
                    styles.sceptre,
                    theme === 'light' ? styles.sceptreLight : styles.sceptreDark
                )}
            ></div>
        </div>
    );
}

export default BallAndSceptre;
