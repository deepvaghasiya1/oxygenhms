import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FiLogOut, FiUser, FiMenu } from 'react-icons/fi';

const Header = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <FiMenu className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-primary-600">OxygenHMS</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-gray-500 capitalize">{user?.role?.[0] || 'User'}</p>
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <FiUser className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={handleLogout}
            className="p-2 hover:bg-red-100 rounded-lg text-gray-600 hover:text-red-600"
            title="Logout"
          >
            <FiLogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
