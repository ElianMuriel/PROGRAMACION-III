
import { useRef } from 'react';

export default function ScrollDemo() {
  const seccionRef = useRef(null);

  const irASeccion = () => {
    seccionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button onClick={irASeccion}>Ir a la sección secreta 👀</button>

      <div style={{ height: '800px' }}>
        <p>(Contenido de relleno para hacer scroll)</p>
      </div>

      <div
        ref={seccionRef}
        style={{
          height: '200px',
          backgroundColor: 'lightcoral',
          padding: '1rem',
          borderRadius: '10px'
        }}
      >
        <h3>🎉 Llegaste a la sección secreta</h3>
        <p>Este bloque fue alcanzado usando scroll automático.</p>
      </div>
    </>
  );
}
