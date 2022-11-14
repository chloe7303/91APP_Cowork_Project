import useVideoPlayer from "../../hooks/useVideoPlayer";
import { useRef } from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeDownFill,
} from "react-icons/bs";

const VideoSlide = ({
  src,
  handleVideoFinished,
}: {
  src: string;
  handleVideoFinished: Function;
}) => {
  const videoElement = useRef(null);

  const {
    playerState,
    toggleMuted,
    togglePlay,
    updateVideoProgress,
    handleUserChangeVideoProgress,
  } = useVideoPlayer(videoElement, handleVideoFinished);

  return (
    <div className="relative">
      <video
        autoPlay={true}
        muted={true}
        width={"528px"}
        height={"703px"}
        src={src}
        ref={videoElement}
        onTimeUpdate={updateVideoProgress}
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
          onChange={(e) => handleUserChangeVideoProgress(e)}
          className="mr-2 self-center video-progress-controller"
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
