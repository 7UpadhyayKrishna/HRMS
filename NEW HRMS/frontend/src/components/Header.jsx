import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-dark-900 border-b border-dark-800 flex items-center justify-between px-6">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <Menu size={24} />
        </button>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold text-white">
            Welcome back, {user?.employee?.firstName || user?.email}
          </h1>
          <p className="text-sm text-gray-400">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 p-2 hover:bg-dark-800 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-white">
                {user?.employee?.firstName} {user?.employee?.lastName}
              </p>
              <p className="text-xs text-gray-400 capitalize">{user?.role}</p>
            </div>
          </button>

          {/* Dropdown */}
          {showUserMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowUserMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-dark-800 border border-dark-700 rounded-lg shadow-lg z-20">
                <div className="py-1">
                  <button
                    onClick={() => {
                      navigate('/settings/profile');
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:bg-dark-700"
                  >
                    <User size={16} />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate('/settings/security');
                      setShowUserMenu(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:bg-dark-700"
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  <hr className="my-1 border-dark-700" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-400 hover:bg-dark-700"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
