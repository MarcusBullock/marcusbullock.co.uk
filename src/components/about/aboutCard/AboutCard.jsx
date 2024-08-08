import { motion } from 'framer-motion';
import { fadeIn } from './../../../utils/motion';
import styles from './AboutCard.module.css';

function AboutCard({ index, title, icon }) {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className={styles.aboutCard}
        >
            <div
                className={styles.aboutCardContainer}
                // options={{
                //     max: 45,
                //     scale: 1,
                //     speed: 450,
                // }}
            >
                <img src={icon} alt={title} className={styles.aboutImg} />
                <h3 className={styles.aboutTitle}>{title}</h3>
            </div>
        </motion.div>
    );
}

export default AboutCard;
