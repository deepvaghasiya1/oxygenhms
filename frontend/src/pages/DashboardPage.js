import React from 'react';
import { useAuth } from '../hooks/useAuth';
import StatCard from '../components/Dashboard/StatCard';
import { FiUsers, FiCalendar, FiActivity, FiTrendingUp } from 'react-icons/fi';

const DashboardPage = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Patients',
      value: '1,234',
      change: '+12%',
      icon: FiUsers,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Appointments',
      value: '42',
      change: '+8%',
      icon: FiCalendar,
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Active Cases',
      value: '28',
      change: '+5%',
      icon: FiActivity,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+23%',
      icon: FiTrendingUp,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's your dashboard overview for today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Patient John Doe registered
                </p>
                <p className="text-xs text-gray-500">10 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Appointment created - Dr. Smith
                </p>
                <p className="text-xs text-gray-500">25 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Lab results uploaded
                </p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 rounded-lg transition">
              New Appointment
            </button>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-2 rounded-lg transition">
              Register Patient
            </button>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-2 rounded-lg transition">
              Create Prescription
            </button>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-2 rounded-lg transition">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
