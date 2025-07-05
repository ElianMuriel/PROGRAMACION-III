import { useRef } from 'react';

export default function ReproductorSonido() {
  const audioRef = useRef(null);

  const reproducir = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <button onClick={reproducir}>🔊 Reproducir sonido</button>
      <audio ref={audioRef} src="https://www.soundjay.com/buttons/button-3.mp3" />
    </div>
  );
}