import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from './Card.module.css';
import classNames from 'classnames';

function Card({ experience, theme, index }) {
    const backgrounds =
        theme === 'light'
            ? ['#3c565e', '#338b85', '#522929', '#878931', '#447633', '#a6bd88']
            : [
                  '#7f9694',
                  '#92a7a9',
                  '#909090',
                  '#7e7e67',
                  '#a9bba3',
                  '#a3aa8b',
              ];
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: backgrounds[index],
                color: theme === 'light' ? '#fff' : '#000',
                borderRadius: '20px',
                opacity: theme === 'light' ? 0.85 : 0.95,
                boxShadow:
                    'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            }}
            contentArrowStyle={{
                borderRight: `7px solid  ${backgrounds[index]}`,
            }}
            date={
                <h3
                    className={classNames(
                        styles.date,
                        theme === 'light' ? styles.dateLight : styles.dateDark
                    )}
                >
                    {experience.startDate} - {experience.endDate}
                </h3>
            }
            iconStyle={{
                background: '#fff',
                outline: `4px solid ${
                    theme === 'light' ? '#b6b6b6' : '#757474'
                }`,
                boxSizing: 'border-box',
            }}
            icon={
                <div className={styles.icon}>
                    <img
                        src={experience.icon}
                        alt={experience.company}
                        className={styles.iconImg}
                    />
                    {index === 0 && <div className={styles.ballTop}></div>}
                </div>
            }
        >
            <div>
                <h3 className={styles.company}>{experience.company}</h3>
                <p className={styles.title}>{experience.title}</p>
                <p className={styles.desc}>{experience.desc}</p>
            </div>
        </VerticalTimelineElement>
    );
}

export default Card;
