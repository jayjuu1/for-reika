import { useRef, useEffect, useState } from 'react';

export default function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [songIndex, setSongIndex] = useState(0);

  // List of songs in public/
  const songs = [
    'public/grentperez.mp3',
    'public/understand.mp3',
    
  ];

  useEffect(() => {
    if (!audioRef.current) return;

    // Set volume
    audioRef.current.volume = 0.3;

    // Handle when a song ends
    const handleEnded = () => {
      const nextIndex = (songIndex + 1) % songs.length; // loop after last song
      setSongIndex(nextIndex);
      audioRef.current.src = songs[nextIndex];
      audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    };

    audioRef.current.addEventListener('ended', handleEnded);

    // Play current song
    audioRef.current.src = songs[songIndex];
    audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));

    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, [songIndex]);

  return (
    <>
      <audio ref={audioRef} />
      {children}
    </>
  );
}
