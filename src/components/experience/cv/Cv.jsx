import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import CvIcon from '../../../assets/images/experience/cv.png';
import styles from './Cv.module.css';
import CvButton from '../../hero/cvButton/CvButton';

function Cv({ theme }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: theme === 'light' ? '#ffffff' : '#d6d5d5',
                color: 'var(--background-color)',
                boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                display: 'flex',
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            contentArrowStyle={{
                borderRight: `7px solid ${
                    theme === 'light' ? '#ffffff' : '#d6d5d5'
                }`,
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
            <CvButton theme={theme} />
        </VerticalTimelineElement>
    );
}

export default Cv;
