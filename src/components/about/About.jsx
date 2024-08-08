import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import styles from './About.module.css';
import SectionWrapper from '../../hoc/SectionWrapper';
import * as classNames from 'classnames';

const About = ({ theme }) => {
    console.log('ABOUT THEME --> ' + ' ' + theme);
    const color = theme === 'light' ? '#717171' : '#b5b5b7';
    return (
        <div className={styles.about}>
            <motion.div variants={textVariant()}>
                <p className={classNames(styles.header)} style={{ color }}>
                    Introduction
                </p>
                <h2 className={styles.header2}>Overview.</h2>
            </motion.div>
            <motion.p
                style={{ color }}
                variants={fadeIn('', '', 0.1, 1)}
                className={classNames(styles.motionP)}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis sapiente ipsum dolorum dicta eaque cumque inventore
                molestias, beatae ea quaerat alias accusamus voluptas autem!
                Alias odit voluptates in totam vitae dignissimos minus eaque
                culpa unde tempore dolore aperiam obcaecati voluptatum aliquam
                corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum
                doloribus.
            </motion.p>
        </div>
    );
};

export default SectionWrapper(About, 'about');
