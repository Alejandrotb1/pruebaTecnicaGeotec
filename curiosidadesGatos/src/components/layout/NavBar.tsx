import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-violet-400 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center " >
        <div className="text-xl font-bold text-violet-900">Cat Curiosities</div>
        <div className="flex space-x-4 " >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-800' : 'text-gray-700'
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/my-curiosities"
            className={({ isActive }) =>
              isActive ? 'text-blue-200' : 'text-gray-700'
            }
          >
            Mis Curiosidades
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
