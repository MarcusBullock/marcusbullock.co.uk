import { motion } from 'framer-motion';
import { fadeIn } from './../../../utils/motion';
import styles from './AboutCard.module.css';
import classNames from 'classnames';

function AboutCard({ IconComponent, index, title, theme }) {
    const svgColor = '#eeeeee';
    const lightModeCardBackgrounds = [
        '#908484',
        '#718963',
        '#a9ab8a',
        '#6e7e7a',
        '#6c7381',
        '#cbbea7',
        '#6e6666',
        '#776979',
    ];
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            className={classNames(
                styles.aboutCard,
                theme === 'light' ? styles.lightShadow : styles.darkShadow
            )}
            style={{ backgroundColor: lightModeCardBackgrounds[index] }}
        >
            <div className={styles.aboutCardContainer}>
                <IconComponent fill={svgColor} className={styles.aboutImg} />
                <h3 className={styles.aboutTitle}>{title}</h3>
            </div>
        </motion.div>
    );
}

export default AboutCard;
