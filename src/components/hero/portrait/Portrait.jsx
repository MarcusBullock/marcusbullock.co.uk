import NormalImage from '../../../assets/images/face.png';
import SillyImage1 from '../../../assets/images/sillyMode/silly1.png';
import SillyImage2 from '../../../assets/images/sillyMode/silly2.png';
import SillyImage3 from '../../../assets/images/sillyMode/silly3.png';
import SillyImage4 from '../../../assets/images/sillyMode/silly4.png';
import SillyImage5 from '../../../assets/images/sillyMode/silly5.png';
import SillyImage6 from '../../../assets/images/sillyMode/silly6.png';
import SillyImage7 from '../../../assets/images/sillyMode/silly7.png';
import SillyImage8 from '../../../assets/images/sillyMode/silly8.png';
import SillyImage9 from '../../../assets/images/sillyMode/silly9.png';
import SillyImage10 from '../../../assets/images/sillyMode/silly10.png';
import SillyImage11 from '../../../assets/images/sillyMode/silly11.png';
import SillyImage12 from '../../../assets/images/sillyMode/silly12.png';
import styles from './Portrait.module.css';

function Portrait({ sillyMode = false }) {
    if (sillyMode) {
        const sillyImages = [
            SillyImage1,
            SillyImage2,
            SillyImage3,
            SillyImage4,
            SillyImage5,
            SillyImage6,
            SillyImage7,
            SillyImage8,
            SillyImage9,
            SillyImage10,
            SillyImage11,
            SillyImage12,
        ];
        const randomImageIndex = getRandom() - 1;
        return (
            <div>
                <img
                    className={styles.portrait}
                    src={sillyImages[randomImageIndex]}
                    alt="portrait"
                />
            </div>
        );
    }

    return (
        <div>
            <img className={styles.portrait} src={NormalImage} alt="portrait" />
        </div>
    );

    function getRandom() {
        return (Math.random() * 12 + 1).toFixed(0);
    }
}

export default Portrait;
