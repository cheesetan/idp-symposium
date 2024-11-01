import React from 'react';
import { 
  Calendar, // today icon

  Clock,    // time for each event
  MapPin,   // location for each event

  ClipboardList, // icons for each event
  Coffee,
  Sofa,
  Speaker,
  Speech,
  View,
  Trophy,
  Camera
} from 'lucide-react';

const AgendaView = () => {
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

export default AgendaView;