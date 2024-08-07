import classNames from 'classnames';
import styles from './Introduction.module.css';

function Introduction({ theme }) {
    return (
        <div>
            <h1 className={styles.introduction}>
                Hi, I&apos;m{' '}
                <span
                    className={classNames(
                        styles.name,
                        theme === 'light' ? styles.nameLight : styles.nameDark
                    )}
                >
                    Marcus
                </span>
            </h1>
            <p className={styles.heroSubText}>
                Software developer.
                <br />
                Full stack, backend, frontend, DB & devops.
            </p>
        </div>
    );
}

export default Introduction;
