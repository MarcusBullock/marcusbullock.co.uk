import { motion } from 'framer-motion';
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
                boxShadow: `3px 3px 8px var(--text-color)`,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
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
                        <div className={styles.projectCard}>
                            <div className={styles.projectCardContainer}>
                                <div
                                    onClick={() =>
                                        window.open(project.github, '_blank')
                                    }
                                    className={styles.github}
                                >
                                    <img
                                        src={Github}
                                        alt="source code"
                                        className={styles.githubIcon}
                                    />
                                </div>
                            </div>

                            <h2 className={styles.projectName}>
                                {project.name}
                            </h2>
                            <p className={styles.projectDesc}>
                                {project.description}
                            </p>
                            <button
                                className={classNames(
                                    styles.projectLinkBtn,
                                    styles.glassmorphism
                                )}
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
