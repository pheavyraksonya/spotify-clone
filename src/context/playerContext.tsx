import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext<any>(null);

const PlayerContextProvider = (props: any) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekBg = useRef<HTMLDivElement | null>(null);
  const seekBar = useRef<HTMLDivElement | null>(null);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(true);
  const [time, setTime] = useState({
    currentTimg: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  function play() {
    audioRef.current?.play();
    setPlayStatus(false);
  }
  function pause() {
    audioRef.current?.pause();
    setPlayStatus(true);
  }
  const playWidthId = (id: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    setTrack(songsData[id]);
    setPlayStatus(false);
    audio.onloadedmetadata = () => {
      audio.play();
    };
  };
  const previous = () => {
    if (track.id > 0) {
      const newTrack = songsData[track.id - 1];
      setTrack(newTrack);
      audioRef.current?.play();
      setPlayStatus(false);
      const audio = audioRef.current;
      if (!audio) return;
      audio.src = newTrack.file;
      audio.onloadedmetadata = () => {
        audio.play();
      };
    }
  };
  const next = () => {
    if (track.id < songsData.length - 1) {
      const newTrack = songsData[track.id + 1];
      setTrack(newTrack);
      setPlayStatus(false);
      const audio = audioRef.current;
      if (!audio) return;
      audio.src = newTrack.file;
      audio.onloadedmetadata = () => {
        audio.play();
      };
    }
  };

  const seekSong = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const audio = audioRef.current;
    const bg = seekBg.current;
    if (!audio || !bg) return;

    const clickX = e.nativeEvent.offsetX;
    const width = bg.offsetWidth;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.ontimeupdate = () => {
      if (!seekBar.current) return;
      const progress = Math.floor((audio.currentTime / audio.duration) * 100);
      seekBar.current.style.width = progress + "%";
      setTime({
        currentTimg: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        },
      });
    };
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWidthId,
    next,
    previous,
    seekSong,
  };
  return (
    <div>
      <PlayerContext.Provider value={contextValue}>
        {props.children}
      </PlayerContext.Provider>
    </div>
  );
};

export default PlayerContextProvider;
