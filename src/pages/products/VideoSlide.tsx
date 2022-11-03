import useVideoPlayer from "../../hooks/useVideoPlayer";
import { useRef } from "react";

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
    <video
      width={"528px"}
      height={"703px"}
      src={src}
      ref={videoElement}
      onTimeUpdate={handleOnTimeUpdate}
    ></video>
  );
};

export default VideoSlide;
