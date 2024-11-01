import React, { useState } from 'react';

import SearchBar from './SearchBar.tsx';
import ExhibitionOverlaySheet from './ExhibitionOverlaySheet.tsx';
import ExhibitionItem from './ExhibitionItem.tsx';

const ExhibitionsView = () => {
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
              <ExhibitionItem exhibition={exhibition} />
            </div>
          ))
        )}
      </div>

      <ExhibitionOverlaySheet 
        exhibition={selectedExhibition} 
        onClose={() => setSelectedExhibition(null)} 
      />
    </div>
  );
};

export default ExhibitionsView;