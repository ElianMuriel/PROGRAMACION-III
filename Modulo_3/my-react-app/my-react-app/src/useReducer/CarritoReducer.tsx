import { useReducer } from 'react';

const initialState = [];

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      return state.filter(p => p.id !== action.id);
    case 'clear':
      return [];
    default:
      return state;
  }
}

export default function Carrito() {
  const [carrito, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'add', product: { id: 1, name: "Camisa" } })}>
        Agregar Camisa
      </button>
      <button onClick={() => dispatch({ type: 'add', product: { id: 2, name: "Pantalón" } })}>
        Agregar Pantalón
      </button>
      <button onClick={() => dispatch({ type: 'add', product: { id: 3, name: "Sombrero" } })}>
        Agregar Sombrero
      </button>
      <button onClick={() => dispatch({ type: 'add', product: { id: 4, name: "Falda" } })}>
        Agregar Falda
      </button>
      <button onClick={() => dispatch({ type: 'add', product: { id: 5, name: "Zapatos" } })}>
        Agregar Zapatos
      </button>
      <button onClick={() => dispatch({ type: 'clear' })}>Vaciar Carrito</button>

      <ul>
        {carrito.map(p => (
          <li key={p.id}>
            {p.name}
            <button onClick={() => dispatch({ type: 'remove', id: p.id })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}