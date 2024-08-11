import Card from './card/Card';
import styles from './Cards.module.css';
import SectionWrapperLight from './../../../hoc/SectionWrapperLight';

function Cards({ theme, skills }) {
    return (
        <div className={styles.cards}>
            {skills.map((skill, index) => (
                <Card
                    key={skill.title}
                    IconComponent={skill.icon}
                    index={index}
                    theme={theme}
                    {...skill}
                />
            ))}
        </div>
    );
}

export default SectionWrapperLight(Cards, styles.cardsContainer);
