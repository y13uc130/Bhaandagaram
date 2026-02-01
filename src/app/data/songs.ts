export interface Song {
  id: string;
  title: string;
  singer: string;
  lyricist: string;
  lyrics: string[];
  audioUrl?: string;
  youtubeUrl?: string;
}

// Mock songs with original, non-copyrighted placeholder lyrics
export const songs: Song[] = [
  {
    id: '1',
    title: 'Song 1',
    singer: 'Singer 1',
    lyricist: 'Author 1',
    youtubeUrl: 'https://youtu.be/cL6IPAFEm_Y?si=27ncFhj8kj7A8n9j',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '2',
    title: 'Song 2',
    singer: 'Singer 2',
    lyricist: 'Author 2',
    youtubeUrl: 'https://youtu.be/6gvu8VjuTFQ?si=AQvjXlRx_iM5HyS0',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '3',
    title: 'Song 3',
    singer: 'Singer 3',
    lyricist: 'Author 3',
    youtubeUrl: 'https://youtu.be/4nLAv5prgWI?si=gE5aln-28Z3HgTbj',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '4',
    title: 'Song 4',
    singer: 'Singer 4',
    lyricist: 'Author 4',
    youtubeUrl: 'https://youtu.be/6LpTIfvg2pk?si=Obfrf6KTfK82gii1',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '5',
    title: 'Song 5',
    singer: 'Singer 5',
    lyricist: 'Author 5',
    youtubeUrl: 'https://youtu.be/Zm4OVdAZsGA?si=cMD0RAVB-RGcI0ZN',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '6',
    title: 'Song 6',
    singer: 'Singer 6',
    lyricist: 'Author 6',
    youtubeUrl: 'https://youtu.be/Z2rYDL_g4OE?si=8t5wA5EX7APjtw3G',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '7',
    title: 'Song 7',
    singer: 'Singer 7',
    lyricist: 'Author 7',
    youtubeUrl: 'https://youtu.be/C7qWg8ip5YY?si=_5msVy5zPbh_flq5',
    lyrics: ['Lyrics coming soon.'],
  },
];
