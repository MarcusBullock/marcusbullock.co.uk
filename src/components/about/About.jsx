import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import styles from './About.module.css';
import SectionWrapper from '../../hoc/SectionWrapper';
import classNames from 'classnames';

const About = ({ theme }) => {
    const color = theme === 'light' ? '#717171' : '#b5b5b7';
    return (
        <div className={styles.about}>
            <motion.div variants={textVariant()}>
                <p className={classNames(styles.header)} style={{ color }}>
                    Introduction
                </p>
                <h2 className={styles.header2}>Overview.</h2>
            </motion.div>
            <motion.p
                style={{ color }}
                variants={fadeIn('', '', 0.1, 1)}
                className={classNames(styles.motionP)}
            >
                A senior software developer with more than 10 years experience
                at industry leading companes in the finance, trading and travel
                industries. I&apos;ve worked in corporate as well as startup
                environments, leading complex projects from start to finish,
                from database and backend work, to UI design and execution, as
                well as architectural design and devops.
            </motion.p>
        </div>
    );
};

export default SectionWrapper(About, 'about');
