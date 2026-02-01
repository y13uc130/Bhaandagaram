import { ChevronLeft, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Song } from '@/app/data/songs';
import { useState, useEffect, useRef } from 'react';

interface LyricsPlayerProps {
  song: Song;
  onBack: () => void;
}

export function LyricsPlayer({ song, onBack }: LyricsPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, '');
      let videoId = '';

      if (host === 'youtube.com' || host === 'm.youtube.com') {
        videoId = parsed.searchParams.get('v') ?? '';
      } else if (host === 'youtu.be') {
        videoId = parsed.pathname.replace('/', '');
      }

      if (!videoId) return '';
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } catch {
      return '';
    }
  };

  useEffect(() => {
    // Reset when song changes
    setIsPlaying(false);
    setCurrentTime(0);
  }, [song.id]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const youtubeEmbedUrl = song.youtubeUrl ? getYouTubeEmbedUrl(song.youtubeUrl) : '';
  const hasYouTube = Boolean(youtubeEmbedUrl);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h2 className="font-semibold text-gray-900">Now Playing</h2>
          <p className="text-sm text-gray-600">{song.title}</p>
        </div>
      </div>

      {/* Lyrics Section */}
      <div
        className={`flex-1 overflow-auto px-6 py-8 pt-38 ${
          hasYouTube ? 'pb-56' : 'pb-40'
        }`}
      >
        <div className="max-w-2xl mx-auto">
          {/* Song Info */}
          <div className="text-center mb-8">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-rose-600 flex items-center justify-center shadow-lg">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{song.title}</h1>
            <p className="text-gray-600">{song.singer}</p>
            <p className="text-sm text-gray-500">Lyrics by {song.lyricist}</p>
          </div>

          {/* Lyrics */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
            <div className="space-y-3 text-center">
              {song.lyrics.map((line, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${
                    line ? 'text-gray-800' : 'h-4'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audio Player */}
      {hasYouTube && (
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white rounded-t-3xl shadow-2xl p-4 pb-6">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-black/90 aspect-video">
              <iframe
                src={youtubeEmbedUrl}
                title={`${song.title} - YouTube`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {!hasYouTube && (
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white rounded-t-3xl shadow-2xl p-6 pb-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-amber-600 [&::-webkit-slider-thumb]:to-rose-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                <SkipBack className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={togglePlay}
                className="p-4 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 hover:shadow-lg transition-all active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>
              <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                <SkipForward className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            >
              {/* Using a sample audio file - in production, this would be the actual song */}
              <source
                src={
                  song.audioUrl ??
                  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                }
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
      )}
    </div>
  );
}
