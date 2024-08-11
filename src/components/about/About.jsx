import { motion } from 'framer-motion';
import styles from './About.module.css';
import { fadeIn, textVariant } from '../../utils/motion';
import SectionWrapper from './../../hoc/SectionWrapper';

const About = () => {
    return (
        <div className={styles.about}>
            <motion.div variants={textVariant()}>
                <p className={styles.header}>Introduction</p>
                <h2 className={styles.header2}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className={styles.aboutMotion}
            >
                A senior software developer with more than 10 years experience
                at industry leading companies in the finance, trading and travel
                sectors. I&apos;ve worked in corporate as well as startup
                environments, leading complex projects from start to finish,
                covering all aspects of the software delivery process - from
                database & backend, to UI design & execution, as well as
                architectural design & devops.
            </motion.p>
        </div>
    );
};

export default SectionWrapper(About, 'about');
