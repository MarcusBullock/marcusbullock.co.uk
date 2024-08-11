import { easeIn, easeInOut, motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Github from '../../../assets/images/tech/github.png';
import classNames from 'classnames';
import styles from './Project.module.css';

function Project({ index, active, handleClick, project, theme }) {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={classNames(
                styles.project,
                active === project.name ? styles.active : ''
            )}
            whileHover={{
                scale: 1.025,
                boxShadow: `3px 3px 8px var(--text-color)`, // Add shadow on hover
                transition: {
                    duration: 0.3, // Duration of the hover animation
                    ease: 'easeInOut', // Smooth ease in-out transition
                },
            }}
            onClick={() => handleClick(project.name)}
        >
            <div className={styles.projectContainer}>
                <img
                    src={theme === 'light' ? project.imageLight : project.image}
                    alt={project.name}
                    className={styles.projectImage}
                />

                {active !== project.name ? (
                    <div className={styles.projHeaderContainer}>
                        <h3 className={styles.projHeader}>{project.name}</h3>
                    </div>
                ) : (
                    <>
                        <div className={styles.x1}>
                            <div className={styles.x2}>
                                <div
                                    onClick={() =>
                                        window.open(project.github, '_blank')
                                    }
                                    className={styles.x3}
                                >
                                    <img
                                        src={Github}
                                        alt="source code"
                                        className={styles.x4}
                                    />
                                </div>
                            </div>

                            <h2 className={styles.x5}>{project.name}</h2>
                            <p className={styles.x6}>{project.description}</p>
                            <button
                                className={styles.x7}
                                onClick={() =>
                                    window.open(project.url, '_blank')
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faLaptopCode}
                                    size="xl"
                                    color="#c9cf20"
                                />
                                TAKE A LOOK
                            </button>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}

export default Project;
