import BigMapImage from '../../assets/images/big-map.jpeg';
import SmallMapImage from '../../assets/images/small-map.png';
import * as classNames from 'classnames';
import styles from './Hero.module.css';

function Hero({ theme }) {
    return (
        <>
            <div className={styles.hero}>
                <img
                    className={classNames(
                        styles.bigMapImage,
                        theme === 'light'
                            ? styles.lightModeOpacity
                            : styles.darkModeOpacity
                    )}
                    src={BigMapImage}
                    loading="lazy"
                    alt="big map"
                />
            </div>
            <div className={styles.hero}>
                <img
                    className={classNames(
                        styles.smallMapImage,
                        theme === 'light'
                            ? styles.lightModeOpacity
                            : styles.darkModeOpacity
                    )}
                    src={SmallMapImage}
                    loading="lazy"
                    alt="small map"
                />
            </div>
            <section
                className={classNames(
                    styles.mainSection,
                    theme === 'light'
                        ? styles.mainSectionLightMode
                        : styles.mainSectionDarkMode
                )}
            >
                <div className={styles.mainSectionContainer}>
                    <div className={styles.ballAndSceptre}>
                        <div
                            className={classNames(
                                styles.ball,
                                theme === 'light'
                                    ? styles.ballLight
                                    : styles.ballDark
                            )}
                        ></div>
                        <div
                            className={classNames(
                                styles.sceptre,
                                theme === 'light'
                                    ? styles.sceptreLight
                                    : styles.sceptreDark
                            )}
                        ></div>
                    </div>
                    <div>
                        <h1 className={styles.heroMainText}>
                            Hi, I&apos;m{' '}
                            <span className={styles.name}>Marcus</span>
                        </h1>
                        <p className={styles.heroSubText}>
                            Software developer.
                            <br />
                            Full stack, backend, frontend, DB & devops.
                        </p>
                    </div>
                    <div className={styles.divider}></div>
                    <div></div>
                </div>
            </section>
        </>
    );
}

export default Hero;
