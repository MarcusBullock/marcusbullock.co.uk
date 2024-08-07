import { motion } from 'framer-motion';
import styles from './AnimatedLetters.module.css';
import * as classNames from 'classnames';

function AnimatedLetters({
    str,
    theme,
    color,
    className,
    enableHoverEffect = false,
    speed = 10,
}) {
    return (
        <span className={classNames(styles.animatedLetters, className)}>
            {str.split('').map((char, index) => (
                <motion.span
                    key={index}
                    className={enableHoverEffect ? styles.animatedLetter : ''}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    color={
                        color != null
                            ? color
                            : theme === 'light'
                            ? 'rgb(96, 94, 94)'
                            : 'rgb(140, 137, 137)'
                    }
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
