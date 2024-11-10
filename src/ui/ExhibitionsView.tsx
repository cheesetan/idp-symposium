import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar.tsx';
import ExhibitionOverlaySheet from './ExhibitionOverlaySheet.tsx';
import ExhibitionItem from './ExhibitionItem.tsx';
import exhibitions from '../data/exhibitions.tsx';
import InteractiveFloorPlan from './InteractiveFloorPlan.tsx';

const useScrollLock = () => {
  const lockScroll = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
  };

  return [lockScroll, unlockScroll];
};

const ExhibitionsView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const [lockScroll, unlockScroll] = useScrollLock();

  const handleOpenExhibition = (exhibition) => {
    lockScroll();
    setSelectedExhibition(exhibition);
  };

  const handleCloseExhibition = () => {
    unlockScroll();
    setSelectedExhibition(null);
  };

  const filteredExhibitions = exhibitions.filter(exhibition => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      exhibition.projectId.toLowerCase().includes(searchTermLower) ||
      exhibition.title.toLowerCase().includes(searchTermLower) ||
      exhibition.organization.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div className="space-y-4">
      <InteractiveFloorPlan 
        onGroupFocus={(tableName) => {
          console.log(`Table clicked: ${tableName}`)
          // find the exhibition where the group's name matches the table name
          const exhibition = exhibitions.find(exhibition => exhibition.projectId === tableName);
          if (exhibition) {
            handleOpenExhibition(exhibition);
          } else {
            console.error(`Exhibition not found for table: ${tableName}`);
          }
        }}
      />

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="space-y-4">
        <AnimatePresence>
          {filteredExhibitions.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 text-gray-500"
            >
              No exhibitions found matching your search
            </motion.div>
          ) : (
            filteredExhibitions.map((exhibition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 active:bg-gray-50 cursor-pointer"
                onClick={() => handleOpenExhibition(exhibition)}
              >
                <ExhibitionItem exhibition={exhibition} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedExhibition && (
          <ExhibitionOverlaySheet 
            exhibition={selectedExhibition} 
            onClose={handleCloseExhibition} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExhibitionsView;
