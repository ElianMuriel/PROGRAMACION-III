import { useReducer, useState } from 'react';

const initialState = [null];

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((_: any, i: any) => i !== action.index);
    default:
      return state;
  }
}

export default function ListaReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [texto, setTexto] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (texto.trim()) {
      dispatch({ type: 'add', payload: texto });
      setTexto("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={texto} onChange={e => setTexto(e.target.value)} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {state.map((item: any, index: any) => (
          <li key={index}>
            {item} <button onClick={() => dispatch({ type: 'remove', index })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
