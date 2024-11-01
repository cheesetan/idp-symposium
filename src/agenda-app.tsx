import React, { useState } from 'react';
import { 
  Calendar, // today icon
  Search,     // search icon
  ChevronLeft, // back button

  Clock,    // time for each event
  MapPin,   // location for each event

  Users,      // members of each exhibition
  Building2,  // organization of each exhibition

  ClipboardList, // icons for each event
  Coffee,
  Sofa,
  Speaker,
  Speech,
  View,
  Trophy,
  Camera
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
      name: "Assessment of Capstone Projects",
      venue: "Level 5",
      startTime: "10:30",
      endTime: "12:00",
      icon: ClipboardList,
      color: "red"
    },
    {
      name: "Lunch",
      venue: "Level 5",
      startTime: "12:00",
      endTime: "13:30",
      icon: Coffee,
      color: "orange"
    },
    {
      name: "Guests and staff to be seated",
      venue: "Auditorium (Level 3)",
      startTime: "13:30",
      endTime: "13:40",
      icon: Sofa,
      color: "yellow"
    },
    {
      name: "Welcome address by Mr Lim, Principal of Ngee Ann Polytechnic",
      venue: "Auditorium (Level 3)",
      startTime: "13:40",
      endTime: "13:45",
      icon: Speaker,
      color: "green"
    },
    {
      name: "Speech by Mr Nich Chan, Principal of School of Science & Technology",
      venue: "Auditorium (Level 3)",
      startTime: "13:50",
      endTime: "13:55",
      icon: Speech,
      color: "blue"
    },
    {
      name: "Viewing of projects & Networking",
      venue: "Level 5",
      startTime: "14:00",
      endTime: "15:00",
      icon: View,
      color: "indigo"
    },
    {
      name: "Award Ceremony",
      venue: "Auditorium (Level 3)",
      startTime: "15:00",
      endTime: "15:30",
      icon: Trophy,
      color: "purple"
    },
    {
      name: "Closing by Emcee & Group Photo",
      venue: "Auditorium (Level 3)",
      startTime: "15:30",
      endTime: "15:35",
      icon: Camera,
      color: "gray"
    }
  ];

  const colorMap = {
    red: {
      bg: "bg-red-50",
      text: "text-red-500",
      border: "border-red-100"
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-500",
      border: "border-orange-100"
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      border: "border-yellow-100"
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-500",
      border: "border-green-100"
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-500",
      border: "border-blue-100"
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-500",
      border: "border-indigo-100"
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-500",
      border: "border-purple-100"
    },
    gray: {
      bg: "bg-gray-50",
      text: "text-gray-500",
      border: "border-gray-100"
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        <span>Today</span>
      </div>

      {events.map((event, index) => {
        const Icon = event.icon;
        const colors = colorMap[event.color];

        return (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start">
              <div className={`p-2 ${colors.bg} rounded-lg`}>
                <Icon className={`w-6 h-6 ${colors.text}`} />
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

const OverlaySheet = ({ exhibition, onClose }) => {
  if (!exhibition) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
          <button 
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Exhibition header info */}
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

          {/* Synopsis section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Synopsis</h3>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            </p>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            </p>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            </p>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            </p>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            </p>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExhibitionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  
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
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 active:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedExhibition(exhibition)}
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

      <OverlaySheet 
        exhibition={selectedExhibition} 
        onClose={() => setSelectedExhibition(null)} 
      />
    </div>
  );
};
