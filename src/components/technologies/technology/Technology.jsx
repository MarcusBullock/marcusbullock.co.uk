import { BallCanvas } from './ball/index.js';
import styles from './Technology.module.css';

const Technology = ({ tech }) => {
    return (
        <div className={styles.technology} key={tech.name}>
            <BallCanvas icon={tech.icon} />
        </div>
    );
};

export default Technology;
