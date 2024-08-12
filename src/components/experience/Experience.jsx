import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { experiences } from '../../constants/constants';
import Card from './card/Card';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import styles from './Experience.module.css';
import 'react-vertical-timeline-component/style.min.css';
import SectionWrapper from '../../hoc/SectionWrapper';
import Cv from './cv/Cv';

function Experience({ theme }) {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.header}>Experience</p>
                <h2 className={styles.header2}>Career.</h2>
            </motion.div>
            <div className={styles.experience}>
                <VerticalTimeline className={styles.customLine}>
                    {experiences.map((experience, index) => (
                        <Card
                            key={index}
                            index={index}
                            experience={experience}
                            theme={theme}
                        />
                    ))}
                    <Cv theme={theme} />
                </VerticalTimeline>
            </div>
        </>
    );
}

export default SectionWrapper(Experience, 'work');
