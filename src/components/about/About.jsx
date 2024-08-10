import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import styles from './About.module.css';
import SectionWrapper from '../../hoc/SectionWrapper';
import classNames from 'classnames';
import { skills } from '../../constants/constants';
import AboutCard from './aboutCard/AboutCard';

const About = ({ theme }) => {
    const color = theme === 'light' ? '#8d8c8c' : '#b5b5b7';
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
                at industry leading companies in the finance, trading and travel
                sectors. I&apos;ve worked in corporate as well as startup
                environments, leading complex projects from start to finish,
                covering all aspects of the software delivery process - from
                database & backend, to UI design & execution, as well as
                architectural design & devops.
            </motion.p>

            <div className={styles.cards}>
                {skills.map((skill, index) => (
                    <AboutCard
                        IconComponent={skill.icon}
                        key={skill.title}
                        index={index}
                        theme={theme}
                        {...skill}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, 'about');
