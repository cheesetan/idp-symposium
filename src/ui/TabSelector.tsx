import React from 'react';

export const TabSelector = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-200 mb-6 backdrop-blur-sm">
      {['Agenda', 'Exhibitions'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === tab
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;