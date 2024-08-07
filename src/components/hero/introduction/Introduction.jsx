import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import classNames from 'classnames';
import styles from './Introduction.module.css';

function Introduction({ theme }) {
    return (
        <div>
            <h1 className={styles.introduction}>
                <div className={styles.animatedIntro}>
                    <AnimatedLetters
                        theme={theme}
                        str="Hi,"
                        enableHoverEffect={true}
                    />
                    <AnimatedLetters
                        className={styles.gap}
                        str="I'm"
                        enableHoverEffect={true}
                    />
                </div>
            </h1>
            <span
                className={classNames(
                    styles.name,
                    theme === 'light' ? styles.nameLight : styles.nameDark
                )}
            >
                <AnimatedLetters
                    color={`${
                        theme === 'light'
                            ? 'rgb(113, 111, 111)'
                            : 'rgb(179, 177, 177)'
                    }`}
                    str="Marcus"
                    enableHoverEffect={true}
                />
                <AnimatedLetters
                    color={`${
                        theme === 'light'
                            ? 'rgb(113, 111, 111)'
                            : 'rgb(179, 177, 177)'
                    }`}
                    str="Bullock"
                    enableHoverEffect={true}
                />
            </span>
            <p className={styles.heroSubText}>
                <AnimatedLetters str="Software developer." speed={15} />
                <AnimatedLetters
                    str="Full stack, backend, frontend,"
                    speed={20}
                />
                <AnimatedLetters str="DB & dev ops." />
            </p>
        </div>
    );
}

export default Introduction;
