import { Music2 } from 'lucide-react';
import { Song } from '@/app/data/songs';

interface SongCardProps {
  song: Song;
  onClick: () => void;
}

export function SongCard({ song, onClick }: SongCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-600 flex items-center justify-center flex-shrink-0">
          <Music2 className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{song.title}</h3>
          {song.singer ? <p className="text-sm text-gray-600 truncate">{song.singer}</p> : null}
          {song.lyricist || song.music ? (
            <p className="text-xs text-gray-500 truncate">
              {[song.lyricist ? `Lyricist: ${song.lyricist}` : null, song.music ? `Music: ${song.music}` : null]
                .filter(Boolean)
                .join(' | ')}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
