import { motion } from 'framer-motion';
import styles from './AnimatedLetters.module.css';
import * as classNames from 'classnames';

function AnimatedLetters({
    str,
    className,
    enableHoverEffect = false,
    speed = 10,
}) {
    return (
        <div className={classNames(styles.animatedLetters, className)}>
            {str.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={
                        enableHoverEffect
                            ? {
                                  scale: 1.2,
                                  transition: { duration: 1 },
                                  color: '#9d9801',
                                  marginLeft: '5px',
                                  marginRight: '5px',
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
        </div>
    );
}

export default AnimatedLetters;
