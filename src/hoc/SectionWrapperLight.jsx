import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapperLight = (Component, className) => {
    function HOC(props) {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.15 }}
                className={className}
            >
                <Component {...props} />
            </motion.section>
        );
    }

    return HOC;
};

export default SectionWrapperLight;
