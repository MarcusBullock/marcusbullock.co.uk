import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import CvPdf from '../../../assets/cv/cv.pdf';
import CvIcon from '../../../assets/images/experience/cv.png';
import styles from './Cv.module.css';
import CvButton from '../../hero/cvButton/CvButton';

function Cv({ theme }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: 'var(--text-color)',
                color: 'var(--background-color)',
                boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                display: 'flex',
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            contentArrowStyle={{
                borderRight: '7px solid  #232631',
            }}
            iconStyle={{
                background: '#fff',
                outline: `4px solid ${
                    theme === 'light' ? '#b6b6b6' : '#757474'
                }`,
                boxSizing: 'border-box',
            }}
            icon={
                <div className={styles.cv}>
                    <img src={CvIcon} alt="cv" className={styles.cvImg} />
                    <div className={styles.ballBottom}></div>
                </div>
            }
        >
            {/* <a className={styles.btn} href={CvPdf} download="marcusbullock_cv">
                <FontAwesomeIcon icon={faDownload} size="lg" color="#cac300" />
                DOWNLOAD CV
            </a> */}
            <CvButton theme={theme} />
        </VerticalTimelineElement>
    );
}

export default Cv;
