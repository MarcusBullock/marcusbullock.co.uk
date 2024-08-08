import { motion } from 'framer-motion';
import styles from './AnimatedLetters.module.css';
import classNames from 'classnames';

function AnimatedLetters({
    stringToAnimate,
    overrideColor,
    theme,
    className,
    enableHoverEffect = false,
    speed = 10,
}) {
    let color = overrideColor;
    if (color == null) color = theme === 'light' ? '#121212' : '#f9f7f7';

    return (
        <span className={classNames(styles.animatedLetters, className)}>
            {stringToAnimate.split('').map((char, index) => (
                <motion.span
                    key={index}
                    className={enableHoverEffect ? styles.animatedLetter : ''}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, color: color }}
                    whileHover={
                        enableHoverEffect
                            ? {
                                  scale: 1.2,
                                  transition: { duration: 1 },
                                  color: '#9d9801',
                                  paddingLeft: '5px',
                                  paddingRight: '5px',
                                  delay: 1,
                              }
                            : null
                    }
                    transition={{
                        duration: 0.25,
                        delay: index / speed,
                    }}
                >
                    {char === ' ' ? <>&nbsp;</> : char}
                </motion.span>
            ))}
        </span>
    );
}

export default AnimatedLetters;
