import './App.css';
import React, { useState } from 'react';
import TabSelector from './ui/TabSelector.tsx';
import AgendaView from './ui/AgendaView.tsx';
import ExhibitionsView from './ui/ExhibitionsView.tsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('Agenda');

  const gradientStyle = {
    background: activeTab === 'Agenda'
      ? 'linear-gradient(180deg, rgba(239,68,68,0.2) 0%, rgb(243 244 246) 66%)'
      : 'linear-gradient(180deg, rgba(59,130,246,0.2) 0%, rgb(243 244 246) 66%)'
  };

  return (
    <div className="min-h-screen" style={gradientStyle}>
      <div className="max-w-md mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{activeTab}</h1>
          <h2 className="text-gray-600 text-sm">E-programme done by Chay Yu Hung Tristan and Tay Kai Quan from IDP Class S4-04.</h2>
        </header>

        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Agenda' ? <AgendaView /> : <ExhibitionsView />}
      </div>
    </div>
  );
};

export default App;
