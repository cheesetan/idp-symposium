import React from "react";
import { Users, Building2 } from 'lucide-react';

const ExhibitionItem = ({ exhibition }) => {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-blue-50 rounded-lg">
        <img src={exhibition.logo} className="w-6 h-6 text-blue-500 object-contain" />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="font-semibold text-gray-900">
          {exhibition.projectId}: {exhibition.title}
        </h2>
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm break-words">
              {exhibition.members.join(", ")}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm break-words">
              {exhibition.organization}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionItem;