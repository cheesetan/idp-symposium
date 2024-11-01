import React from 'react';
import { 
  Search,     // search icon
} from 'lucide-react';

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

export default SearchBar;
