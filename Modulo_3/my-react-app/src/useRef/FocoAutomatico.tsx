import { useEffect, useRef } from 'react';

export default function FocoAutomatico() {
  const inputRef = useRef(null); // Creamos una referencia vacía

  useEffect(() => {
    // Al montar el componente, enfocamos el input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label>Nombre: </label>
      <input ref={inputRef} placeholder="Escribe tu nombre aquí..." />
      <input ref={inputRef} placeholder="Escribe tu cedula aquí..." />
    </div>
  );
}