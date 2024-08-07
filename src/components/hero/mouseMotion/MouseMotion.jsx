import { motion } from 'framer-motion';
import * as classNames from 'classnames';
import styles from './MouseMotion.module.css';

function MouseMotion({ theme }) {
    return (
        <div className={styles.mouseMotion}>
            <a href="#about">
                <div
                    className={classNames(
                        styles.mouseContainer,
                        theme === 'light' ? styles.mouseLight : styles.mouseDark
                    )}
                >
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                        className={styles.mouseMotionAnimation}
                    />
                </div>
            </a>
        </div>
    );
}

export default MouseMotion;
