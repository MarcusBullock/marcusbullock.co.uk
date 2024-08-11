import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, staggerContainer } from '../../utils/motion';
import { projects } from '../../constants/constants';
import styles from './Projects.module.css';
import SectionWrapper from '../../hoc/SectionWrapper';

function Projects() {
    const [activeProject, setActiveProject] = useState('The Hotel Company');
    return (
        <div className={styles.projects}>
            <motion.div variants={textVariant()}>
                <p className={`${styles.header} `}>Extras</p>
                <h2 className={`${styles.header2}`}>Side Projects.</h2>
            </motion.div>
            <div>
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className={styles.projectMotion}
                >
                    While I don&apos;t get much spare time these days being a
                    new father of two, I still love creating new projects and
                    keeping up to date with the latest language and framework
                    changes to stay at the top of my game. Any side projects I
                    do are mainly in React as it&apos;s my preferred front-end
                    language, and there are so many flavours and patterns the
                    React library and ecosystem has to offer. Here are a few of
                    my more recent projects.
                </motion.p>
            </div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={styles.projectsListMotion}
            >
                <div className={styles.projectsList}>
                    {projects.map((project, index) => (
                        <div key={index}>{project.name}</div>
                        // <ProjectCard
                        //     key={project.id}
                        //     index={index}
                        //     {...project}
                        //     active={active}
                        //     handleClick={setActive}
                        // />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default SectionWrapper(Projects, 'projects');
