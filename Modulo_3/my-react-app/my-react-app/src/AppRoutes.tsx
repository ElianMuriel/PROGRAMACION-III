import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import IndexUseStates from './useStates/indexUseStates';
import IndexUseMemo from './useMemo/IndexUseMemo';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/use-states" element={<IndexUseStates />} />
      <Route path="/use-memo" element={<IndexUseMemo />} />
    </Routes>
  );
}