import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.css';
import videos from '../../assets/videos.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={videos} autoPlay muted controls></video>
        </div>
    );
};

VideoPlayer.propTypes = {
    playState: PropTypes.bool.isRequired,
    setPlayState: PropTypes.func.isRequired,
};

export default VideoPlayer;
