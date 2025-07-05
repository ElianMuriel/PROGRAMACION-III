import { useReducer } from 'react';

const steps = ["Datos personales", "Dirección", "Confirmación"];
const initialState = { step: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'next':
      return { step: Math.min(state.step + 1, steps.length - 1) };
    case 'prev':
      return { step: Math.max(state.step - 1, 0) };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function FormSteps() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3>Paso actual: {steps[state.step]}</h3>
      <button onClick={() => dispatch({ type: 'prev' })}>Anterior</button>
      <button onClick={() => dispatch({ type: 'next' })}>Siguiente</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reiniciar</button>
    </>
  );
}