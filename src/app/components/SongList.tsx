import { useState, useMemo } from 'react';
import { Song, songs } from '@/app/data/songs';
import { SongCard } from './SongCard';
import { SearchFilters } from './SearchFilters';
import { ChevronLeft, Music } from 'lucide-react';

interface SongListProps {
  onSongSelect: (song: Song) => void;
  onBack: () => void;
}

export function SongList({ onSongSelect, onBack }: SongListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredSongs = useMemo(() => {
    if (!searchQuery.trim()) return songs;

    const query = searchQuery.toLowerCase();

    return songs.filter((song) => {
      switch (filterType) {
        case 'title':
          return song.title.toLowerCase().includes(query);
        case 'singer':
          return song.singer.toLowerCase().includes(query);
        case 'lyricist':
          return song.lyricist.toLowerCase().includes(query);
        case 'all':
        default:
          return (
            song.title.toLowerCase().includes(query) ||
            song.singer.toLowerCase().includes(query) ||
            song.lyricist.toLowerCase().includes(query)
          );
      }
    });
  }, [searchQuery, filterType]);

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm px-6 py-6 rounded-b-3xl shadow-sm">
        <div className="mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-600 flex items-center justify-center">
            <Music className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Divine Songs</h1>
            <p className="text-sm text-gray-600">The Sacred Treasury of Divine Songs</p>
          </div>
        </div>
        <SearchFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterType={filterType}
          onFilterChange={setFilterType}
        />
      </div>

      {/* Songs List */}
      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="max-w-2xl mx-auto space-y-3">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} onClick={() => onSongSelect(song)} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No songs found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
