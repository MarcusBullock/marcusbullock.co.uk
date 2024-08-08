import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from './SectionWrapper.module.css';

const SectionWrapper = (Component, id) => {
    function HOC(props) {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={styles.sectionWrapper}
            >
                <span className="hash-span" id={id}>
                    &nbsp;
                </span>
                <Component {...props} />
            </motion.section>
        );
    }

    return HOC;
};

export default SectionWrapper;
