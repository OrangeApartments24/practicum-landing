import { useState, useRef } from 'react';
import styles from './Video.module.css';

const Video = ({ src }) => {
    const videoRef = useRef();
    const [playMode, setPlayMode] = useState(false);

    return (
        <div className={styles.video}>
            {!playMode && (
                <div
                    onClick={() => {
                        setPlayMode(true);
                        videoRef.current.play();
                    }}
                    className={styles.video__overlay}
                ></div>
            )}
            <video
                className={styles.video__player}
                ref={videoRef}
                width={'100%'}
                height={'100%'}
                controls={playMode}
            >
                <source type='video/mp4;' src={src}></source>
            </video>
        </div>
    );
};

export default Video;
