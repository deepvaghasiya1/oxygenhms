import React from 'react';

const StatCard = ({ title, value, change, icon: Icon, color, iconColor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className="text-xs text-green-600 font-medium mt-2">{change} from last month</p>
        </div>
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
