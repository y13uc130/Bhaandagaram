import { useState } from 'react';
import { Song } from '@/app/data/songs';
import { HomeScreen } from '@/app/components/HomeScreen';
import { SongList } from '@/app/components/SongList';
import { LyricsPlayer } from '@/app/components/LyricsPlayer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'list' | 'player'>('home');
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleEnterApp = () => {
    setCurrentView('list');
  };

  const handleSongSelect = (song: Song) => {
    setSelectedSong(song);
    setCurrentView('player');
  };

  const handleBackToList = () => {
    setSelectedSong(null);
    setCurrentView('list');
  };

  const handleBackToHome = () => {
    setSelectedSong(null);
    setCurrentView('home');
  };

  return (
    <div className="size-full">
      {currentView === 'home' && <HomeScreen onEnter={handleEnterApp} />}
      {currentView === 'list' && (
        <SongList onSongSelect={handleSongSelect} onBack={handleBackToHome} />
      )}
      {currentView === 'player' && selectedSong && (
        <LyricsPlayer song={selectedSong} onBack={handleBackToList} />
      )}
    </div>
  );
}
