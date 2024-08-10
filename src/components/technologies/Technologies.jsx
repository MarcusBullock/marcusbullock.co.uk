import { textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';
import Technology from './technology/Technology';
import { technologies } from '../../constants/constants';
import styles from './Technologies.module.css';
import classNames from 'classnames';

function Technologies({ theme }) {
    return (
        <section className={styles.technologies}>
            <motion.div variants={textVariant()}>
                <p
                    className={classNames(
                        styles.header,
                        theme === 'light' ? '' : styles.dark
                    )}
                >
                    My skills
                </p>
                <h2 className={styles.header2}>Technologies.</h2>
            </motion.div>

            <div className={styles.balls}>
                {technologies.map((tech, index) => (
                    <Technology key={index} theme={theme} tech={tech} />
                ))}
            </div>
        </section>
    );
}

export default Technologies;
