import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import classNames from 'classnames';
import styles from './Introduction.module.css';

function Introduction({ theme }) {
    return (
        <div>
            <h1 className={styles.introduction}>
                <div className={styles.animatedIntro}>
                    <AnimatedLetters str="Hi," enableHoverEffect={true} />
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
                <AnimatedLetters str="Marcus" enableHoverEffect={true} />
                <AnimatedLetters str="Bullock" enableHoverEffect={true} />
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
