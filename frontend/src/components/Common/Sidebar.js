import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiDroplet,
  FiPill,
  FiDollarSign,
  FiImage,
  FiHeart,
  FiTrendingUp,
  FiSettings,
  FiX,
  FiActivity,
  FiPhone,
  FiClipboard,
  FiFilter,
  FiTruck,
  FiClock,
  FiMessageSquare,
} from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const location = useLocation();
  const userRole = user?.role?.[0] || '';

  const menuItems = {
    admin: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['admin'] },
      { icon: FiUsers, label: 'Users', path: '/admin/users', roles: ['admin'] },
      { icon: FiSettings, label: 'System Settings', path: '/admin/settings', roles: ['admin'] },
      { icon: FiActivity, label: 'Audit Logs', path: '/admin/logs', roles: ['admin'] },
    ],
    doctor: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['doctor'] },
      { icon: FiUsers, label: 'My Patients', path: '/doctor/patients', roles: ['doctor'] },
      { icon: FiCalendar, label: 'Appointments', path: '/doctor/appointments', roles: ['doctor'] },
      { icon: FiPill, label: 'Prescriptions', path: '/doctor/prescriptions', roles: ['doctor'] },
      { icon: FiClipboard, label: 'Clinical Notes', path: '/doctor/notes', roles: ['doctor'] },
    ],
    nurse: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['nurse'] },
      { icon: FiHeart, label: 'Ward Management', path: '/nurse/ward', roles: ['nurse'] },
      { icon: FiActivity, label: 'Vitals', path: '/nurse/vitals', roles: ['nurse'] },
      { icon: FiPill, label: 'Medications', path: '/nurse/medications', roles: ['nurse'] },
    ],
    receptionist: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['receptionist'] },
      { icon: FiUsers, label: 'Registration', path: '/receptionist/register', roles: ['receptionist'] },
      { icon: FiCalendar, label: 'Appointments', path: '/receptionist/appointments', roles: ['receptionist'] },
      { icon: FiPhone, label: 'Check-In', path: '/receptionist/checkin', roles: ['receptionist'] },
      { icon: FiDollarSign, label: 'Billing', path: '/receptionist/billing', roles: ['receptionist'] },
    ],
    lab: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['lab'] },
      { icon: FiDroplet, label: 'Test Orders', path: '/lab/orders', roles: ['lab'] },
      { icon: FiClipboard, label: 'Results', path: '/lab/results', roles: ['lab'] },
    ],
    pharmacy: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['pharmacy'] },
      { icon: FiPill, label: 'Prescriptions', path: '/pharmacy/prescriptions', roles: ['pharmacy'] },
      { icon: FiTrendingUp, label: 'Inventory', path: '/pharmacy/inventory', roles: ['pharmacy'] },
    ],
    billing: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['billing'] },
      { icon: FiDollarSign, label: 'Invoices', path: '/billing/invoices', roles: ['billing'] },
      { icon: FiTrendingUp, label: 'Reports', path: '/billing/reports', roles: ['billing'] },
    ],
    radiology: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['radiology'] },
      { icon: FiImage, label: 'Orders', path: '/radiology/orders', roles: ['radiology'] },
      { icon: FiClipboard, label: 'Reports', path: '/radiology/reports', roles: ['radiology'] },
    ],
    ot: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['ot'] },
      { icon: FiClock, label: 'Schedule', path: '/ot/schedule', roles: ['ot'] },
      { icon: FiFilter, label: 'Rooms', path: '/ot/rooms', roles: ['ot'] },
    ],
    emergency: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['emergency'] },
      { icon: FiAlert, label: 'Cases', path: '/emergency/cases', roles: ['emergency'] },
      { icon: FiTruck, label: 'Ambulance', path: '/emergency/ambulance', roles: ['emergency'] },
    ],
    hr: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['hr'] },
      { icon: FiUsers, label: 'Staff', path: '/hr/staff', roles: ['hr'] },
      { icon: FiClock, label: 'Attendance', path: '/hr/attendance', roles: ['hr'] },
    ],
    inventory: [
      { icon: FiHome, label: 'Dashboard', path: '/dashboard', roles: ['inventory'] },
      { icon: FiTrendingUp, label: 'Stock', path: '/inventory/stock', roles: ['inventory'] },
      { icon: FiTruck, label: 'Orders', path: '/inventory/orders', roles: ['inventory'] },
    ],
  };

  const relevantItems = menuItems[userRole] || menuItems.admin;

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-gray-900 text-white w-64 transform transition-transform duration-300 z-50 lg:z-40 lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="font-bold">OxygenHMS</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded lg:hidden"
          >
            <FiX />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {relevantItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
