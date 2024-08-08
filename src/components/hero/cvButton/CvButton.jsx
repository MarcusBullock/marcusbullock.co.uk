import CV from '../../../assets/cv/cv.pdf';
import { motion } from 'framer-motion';
import styles from './CvButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFloppyDisk,
    faSquareCheck,
} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import classNames from 'classnames';

function CvButton({ theme }) {
    const [hasClicked, setHasClicked] = useState(false);
    const handleDownloadClick = () => {
        setHasClicked(true);
    };

    const downloadIconColor = theme === 'light' ? '#f1dd00' : '#edde00';
    const checkIconColor = theme === 'light' ? '#008015' : '#11ff00';
    return (
        <motion.button
            className={classNames(
                styles.cvButton,
                theme === 'light'
                    ? styles.cvButtonLightMode
                    : styles.cvButtonDarkMode,
                hasClicked
                    ? theme === 'light'
                        ? styles.disabled
                        : styles.disabledDark
                    : '',
                hasClicked ? styles.widthClicked : styles.widthNotClicked
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <a
                href={CV}
                download="marcusbullock_cv"
                onClick={handleDownloadClick}
                style={{ pointerEvents: hasClicked ? 'none' : 'auto' }}
                className={classNames(
                    styles.links,
                    hasClicked
                        ? theme === 'light'
                            ? styles.disabled
                            : styles.disabledDark
                        : ''
                )}
            >
                {hasClicked ? (
                    <>
                        <span className={styles.buttonTextColorDownloaded}>
                            CV DOWNLOADED
                        </span>
                        <FontAwesomeIcon
                            color={checkIconColor}
                            size="lg"
                            icon={faSquareCheck}
                        />
                    </>
                ) : (
                    <>
                        <span className={styles.buttonTextColorDownload}>
                            DOWNLOAD CV
                        </span>
                        <FontAwesomeIcon
                            color={downloadIconColor}
                            size="lg"
                            icon={faFloppyDisk}
                        />
                    </>
                )}
            </a>
        </motion.button>
    );
}

export default CvButton;
