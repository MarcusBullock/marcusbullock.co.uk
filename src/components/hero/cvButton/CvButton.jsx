import CV from '../../../assets/cv/cv.pdf';
import { motion } from 'framer-motion';
import styles from './CvButton.module.css';

function CvButton() {
    return (
        <motion.button
            className={styles.cvButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <a className="flat-button" href={CV} download="marcusbullock_cv">
                DOWNLOAD CV
            </a>
        </motion.button>
    );
}

export default CvButton;
