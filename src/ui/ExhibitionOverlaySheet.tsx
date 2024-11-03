import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExhibitionItem from './ExhibitionItem.tsx';

const ExhibitionOverlaySheet = ({ exhibition, onClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const titleRef = useRef(null);

  const handleScroll = (e) => {
    if (titleRef.current) {
      const titlePosition = titleRef.current.getBoundingClientRect().top;
      setIsScrolled(titlePosition < 130);
    }
  };

  if (!exhibition) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col"
      onClick={onClose}
    >
      {/* This div creates the top padding space */}
      <div className="flex-1 min-h-[10vh]" />
      
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ 
          type: 'spring',
          damping: 30,
          stiffness: 300
        }}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-t-xl overflow-y-auto w-full max-h-[90vh]"
        onScroll={handleScroll}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="p-4 flex items-center">
            <button
              onClick={onClose}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>

            <AnimatePresence>
              {isScrolled && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="ml-4 truncate flex-1"
                >
                  <span className="font-medium">
                    {exhibition.projectId}
                    {exhibition.title && ': '}
                    <span className="font-normal">{exhibition.title}</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 space-y-6"
        >
          <div ref={titleRef}>
            <ExhibitionItem exhibition={exhibition} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Synopsis</h3>
            <p className="text-gray-600">
              {exhibition.synopsis}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExhibitionOverlaySheet;