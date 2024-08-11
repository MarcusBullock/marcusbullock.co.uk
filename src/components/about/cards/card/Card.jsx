import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/motion';
import classNames from 'classnames';
import styles from './Card.module.css';

function Card({ index, title, color, theme, IconComponent }) {
    const svgColor = '#eeeeee';
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.5)}
            className={classNames(
                styles.card,
                theme === 'light' ? styles.lightShadow : styles.darkShadow
            )}
            style={{ backgroundColor: color }}
        >
            <div className={styles.cardContainer}>
                <IconComponent
                    alt={title}
                    fill={svgColor}
                    className={styles.cardImage}
                />
                <h3 className={styles.cardTitle} style={{ color: svgColor }}>
                    {title}
                </h3>
            </div>
        </motion.div>
    );
}

export default Card;
