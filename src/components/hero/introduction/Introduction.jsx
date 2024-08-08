import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import styles from './Introduction.module.css';

function Introduction({ theme }) {
    return (
        <div>
            <h1 className={styles.introduction}>
                <div className={styles.animatedIntro}>
                    <AnimatedLetters
                        theme={theme}
                        stringToAnimate="Hi,"
                        enableHoverEffect={true}
                    />
                    <AnimatedLetters
                        theme={theme}
                        className={styles.gap}
                        stringToAnimate="I'm"
                        enableHoverEffect={true}
                    />
                </div>
            </h1>
            <span className={styles.name}>
                <AnimatedLetters
                    theme={theme}
                    overrideColor={theme === 'light' ? '#858585' : '#9d9b9b'}
                    stringToAnimate="Marcus"
                    enableHoverEffect={true}
                />
                <AnimatedLetters
                    theme={theme}
                    overrideColor={theme === 'light' ? '#858585' : '#9d9b9b'}
                    stringToAnimate="Bullock"
                    enableHoverEffect={true}
                />
            </span>
            <p className={styles.heroSubText}>
                <AnimatedLetters
                    theme={theme}
                    stringToAnimate="Software developer."
                    speed={15}
                />
                <AnimatedLetters
                    theme={theme}
                    stringToAnimate="Full stack, backend, frontend,"
                    speed={20}
                />
                <AnimatedLetters
                    theme={theme}
                    stringToAnimate="DB & dev ops."
                />
            </p>
        </div>
    );
}

export default Introduction;
