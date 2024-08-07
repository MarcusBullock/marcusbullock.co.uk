import BigMapImage from '../../assets/images/big-map.jpeg';
import SmallMapImage from '../../assets/images/small-map.png';
import * as classNames from 'classnames';
import styles from './Hero.module.css';
import MouseMotion from './mouseMotion/MouseMotion';
import BallAndSceptre from './ballAndSceptre/BallAndSceptre';
import Introduction from './introduction/Introduction';
import Divider from './divider/Divider';

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
                    <BallAndSceptre theme={theme} />
                    <Introduction theme={theme} />
                    <Divider />
                </div>

                <MouseMotion theme={theme} />
            </section>
        </>
    );
}

export default Hero;
