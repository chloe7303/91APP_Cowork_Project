import useVideoPlayer from "../../hooks/useVideoPlayer";
import { useRef } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeDownFill,
} from "react-icons/bs";

const VideoSlide = ({ src }: { src: string }) => {
  const videoElement = useRef(null);
  const {
    playerState,
    toggleMuted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
  } = useVideoPlayer(videoElement);

  return (
    <div className="relative">
      <video
        width={"528px"}
        height={"703px"}
        src={src}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      ></video>
      <div className="absolute bottom-[15px] py-2 px-4 rounded-md bg-white/25 z-10 flex left-[50%] -translate-x-[50%]">
        <button className="mr-2" onClick={togglePlay}>
          {playerState.isPlaying ? (
            <BsFillPauseFill fill="#fff" size={25} />
          ) : (
            <BsFillPlayFill fill="#fff" size={25} />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.progress}
          onChange={(e) => handleVideoProgress(e)}
          className="mr-2"
        />
        <button onClick={toggleMuted}>
          {playerState.isMuted ? (
            <BsFillVolumeDownFill fill="#fff" size={25} />
          ) : (
            <BsFillVolumeMuteFill fill="#fff" size={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoSlide;
