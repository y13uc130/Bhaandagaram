import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filterType: string;
  onFilterChange: (filter: string) => void;
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  filterType,
  onFilterChange,
}: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'title', label: 'Song Name' },
    { value: 'singer', label: 'Singer' },
    { value: 'lyricist', label: 'Lyricist' },
  ];

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search songs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-full border-2 border-gray-100 focus:border-amber-300 focus:outline-none transition-colors"
        />
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {showFilters && (
        <div className="bg-white rounded-3xl p-4 border-2 border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-3">Search by:</p>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => onFilterChange(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filterType === filter.value
                    ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
