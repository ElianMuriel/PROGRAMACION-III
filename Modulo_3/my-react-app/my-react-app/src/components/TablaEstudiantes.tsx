const estudiantes = [
  { nombre: 'Juan', apellido: 'Pérez' },
  { nombre: 'María', apellido: 'López' },
  { nombre: 'Carlos', apellido: 'García' },
];

export default function TablaEstudiantes() {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((persona, index) => (
          <tr key={index}>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
