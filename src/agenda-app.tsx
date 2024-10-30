import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  MapPin,
  Music,
  Coffee,
  Book,
  Users,
  Building2,
  Search
} from 'lucide-react';

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

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
        placeholder="Search exhibitions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

// ... [AgendaView component remains the same except for bg-white/80 and backdrop-blur-sm classes added to cards] ...

export const AgendaView = () => {
  const events = [
    {
      name: "Team Meeting",
      venue: "Conference Room A",
      startTime: "09:00",
      endTime: "10:30",
      icon: Users
    },
    {
      name: "Coffee Break",
      venue: "Cafeteria",
      startTime: "10:30",
      endTime: "11:00",
      icon: Coffee
    },
    {
      name: "Workshop",
      venue: "Training Room",
      startTime: "11:00",
      endTime: "12:30",
      icon: Book
    },
    {
      name: "Concert",
      venue: "Auditorium",
      startTime: "14:00",
      endTime: "16:00",
      icon: Music
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        <span>Today</span>
      </div>

      {events.map((event, index) => {
        const Icon = event.icon;
        return (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="font-semibold text-gray-900">{event.name}</h2>
                
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ExhibitionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const exhibitions = [
    {
      projectId: "ABCD1",
      title: "Interactive Data Visualization for Climate Change",
      members: ["Sarah Johnson", "Michael Chen", "Emma Rodriguez"],
      organization: "Climate Research Institute",
    },
    {
      projectId: "EFGH2",
      title: "Machine Learning in Healthcare Diagnostics",
      members: ["David Smith", "Lisa Wong"],
      organization: "Medical Innovations Lab",
    },
    {
      projectId: "JKLM3",
      title: "Sustainable Urban Transportation Solutions Platform",
      members: ["James Wilson", "Ana Patel", "Marcus Lee"],
      organization: "Smart Cities Initiative",
    }
  ];

  const filteredExhibitions = exhibitions.filter(exhibition => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      exhibition.title.toLowerCase().includes(searchTermLower) ||
      exhibition.organization.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      
      <div className="space-y-4">
        {filteredExhibitions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No exhibitions found matching your search
          </div>
        ) : (
          filteredExhibitions.map((exhibition, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold text-gray-900">
                    {exhibition.projectId}: {exhibition.title}
                  </h2>
                  
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {exhibition.members.join(", ")}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exhibition.organization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
