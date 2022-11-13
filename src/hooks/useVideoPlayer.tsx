import { useState, useEffect } from "react";

const useVideoPlayer = (
  videoElement: React.MutableRefObject<HTMLVideoElement | null>,
  handleVideoFinished: Function
) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: true,
    progress: 0,
    isMuted: true,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const toggleMuted = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  const updateVideoProgress = () => {
    if (!videoElement.current) return;
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
    if (progress === 100) {
      handleVideoFinished();
      setPlayerState({ ...playerState, isPlaying: true, progress: 0 });
    }
  };

  const handleUserChangeVideoProgress = (event: {
    target: { value: unknown };
  }) => {
    if (!videoElement.current) return;
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  useEffect(() => {
    if (!videoElement.current) return;
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  return {
    playerState,
    togglePlay,
    toggleMuted,
    updateVideoProgress,
    handleUserChangeVideoProgress,
  };
};

export default useVideoPlayer;
