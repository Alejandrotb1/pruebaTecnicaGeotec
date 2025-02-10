import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import NewCuriosity from '../pages/NewCuriosity.tsx';
import MyCuriosities from '../pages/myCuriosities.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewCuriosity />} />
      <Route path="/my-curiosities" element={<MyCuriosities />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
