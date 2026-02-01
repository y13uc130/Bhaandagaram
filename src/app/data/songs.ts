export interface Song {
  id: string;
  title: string;
  singer: string;
  lyricist: string;
  music?: string;
  lyrics: string[];
  audioUrl?: string;
  youtubeUrl?: string;
}

// Mock songs with original, non-copyrighted placeholder lyrics
export const songs: Song[] = [
  {
    id: '1',
    title: '"Ettivariki" a melodious composition on Shri Ramanujacharya by P Taraka Ramarao',
    singer: 'Sai Charan',
    lyricist: 'T.P. Raghavacharya Swamy',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/cL6IPAFEm_Y?si=27ncFhj8kj7A8n9j',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '2',
    title: '"Vollananduva Madallaranduva" song on Bhagavad Ramanujacharya by P.Taraka Rama Rao.',
    singer: 'Padala Taraka Ramarao',
    lyricist: 'T.P. Raghavacharya Swamy',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/6gvu8VjuTFQ?si=AQvjXlRx_iM5HyS0',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '3',
    title: '"Vardhatam Yathiraja" a beautiful song on Ramanujacharya by P Taraka Rama Rao.',
    singer: 'P. Taraka Ramarao',
    lyricist: 'Sriman Yugandharacharyulu',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/4nLAv5prgWI?si=gE5aln-28Z3HgTbj',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '4',
    title: '"Neerajanam Ide Sruthi Tejunaku" Mangalam on Ramanujacharya | Taraka Ramarao | Sindruri & Ala',
    singer: 'Sindhuri & Ala',
    lyricist: 'Sri Rambhatla Nrusimha Sharma',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/6LpTIfvg2pk?si=Obfrf6KTfK82gii1',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '5',
    title: '"Bhakti Sasyamulilanu" song on Shri Ramanujacharya by P.Taraka Ramarao.',
    singer: 'Padala Taraka Ramarao',
    lyricist: 'T.P. Raghavacharya Swamy',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/Zm4OVdAZsGA?si=cMD0RAVB-RGcI0ZN',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '6',
    title: '"Opaleni Cheli" a melodious composition on Ramanuja by P Taraka Ramarao',
    singer: 'Pavan Charan',
    lyricist: 'T.P. Raghavacharya Swamy',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/Z2rYDL_g4OE?si=8t5wA5EX7APjtw3G',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '7',
    title: '"Entha Sudinamu" song on Acharya Sahasrabdi by P.Taraka Ramarao',
    singer: 'Gayatri',
    lyricist: 'T.P. Raghavacharya Swamy',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/C7qWg8ip5YY?si=_5msVy5zPbh_flq5',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '8',
    title: 'Anaro Anaro Ramanuja ani | Tribute to Sri Ramanuja',
    singer: '',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/cA2HA3Qx67s?si=0IiOl0kDU1aoB0sK',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '9',
    title: '"Kanarave Karuna Samudra" a song from the album Ramanuja Sthuthi Chandrika by P Taraka Ramarao',
    singer: 'Padala Taraka Ramarao',
    lyricist: 'Sri Koganti Venkatacharyulu',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/h2tg8SmFDWM?si=_hENOsv7OnpUExDt',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '10',
    title: 'Sri Bhashyakara | Tribute to Sri Ramanuja',
    singer: '',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/c95CySskhCk?si=kv9gUrmWTs6wntr0',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '11',
    title:
      'అడుగడుగో రామానుజ | Shankar Mahadevan Song | Inaugurates Statue Of Equality | BhaktiOne',
    singer: 'Shankar Mahadevan',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/ilm-17_-RJI?si=q71FoUlABix-K8TC',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '12',
    title: 'Jeeyaru Jeeyaru Chinna Jeeyaru veeru',
    singer: '',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/6dR40a092rQ?si=6t00GL_i1LAwE86B',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '13',
    title:
      'అదిగో శ్రీ రామానుజ జయధ్వజం సాంగ్ | రామానుజ సమారోహం | Shankar Mahadevan | Sri Chinna Jeeyar Swami Ji',
    singer: 'Shankar Mahadevan',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/euuwI9qdYJk?si=3enNF6w_IFAnw67d',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '14',
    title:
      'రామానుజాచార్యులపై శ్రీరామచంద్ర అద్భుత పాట..! | Ramanuja Sri Ramanuja Song | Statue of Equality',
    singer: 'Sreerama Chandra',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/Lz7XC3UG5YU?si=bRzP4kuMlk0-CJzF',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '15',
    title:
      'World Music Day || The Devotional Ramanuja Song || Sri Ahobila Jeeyar Swamiji || Jet World',
    singer: 'Sri Sri Sri Tridandi Ahobila Ramanuja Jeeyar Swamiji',
    lyricist: 'Addanki Srinivasacharyulu',
    music: 'Sriman Taraka Rama Rao',
    youtubeUrl: 'https://youtu.be/qs-RSgSpeJc?si=q5b5rcCKgFE65x0U',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '16',
    title:
      '"Nee Sari Evaru" a song on Sri Ramanuja sung by Sri Sri Sri Tridandi Ahobala Ramanuja Jeeyar Swami.',
    singer: 'Sri Sri Sri Ahobila Ramanuja Jeeyar Swami',
    lyricist: 'Sri Koganti Venkatacharyulu',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/27-RqxFllVg?si=6sPpFHkTd2Y6AicK',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '17',
    title: '"Lali Ramanuja Lali Yathiraja" song on Ramanujacharya by P.Taraka Ramarao',
    singer: 'Shivani',
    lyricist: 'T.P. Raghavacharya Dasan',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/UVRs_acWatU?si=uFUDe5AJG4TTAwfI',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '18',
    title: '"Namo Namo Yathiraja" song on Sri Ramanujacharya by P.Taraka Rama Rao.',
    singer: 'Dheeraj Chandra Padala',
    lyricist: 'Koganti Venkatacharyulu',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/qO3sw9pf4DY?si=ZbS808mURNhg_yIf',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '19',
    title: '"Suprabhata Samayam Lo" keerthana on Ramanujacharya by P.Taraka Ramarao',
    singer: 'Pavan Charan',
    lyricist: 'Smt. Goda Sridevi',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/lSVjDpQlXJ0?si=Ka2KfnaPf7h7zAWz',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '20',
    title:
      'Kalikalusha - Guru Keerthi Chandrika | Raaganjali 5 | Sri Ramanuja Sahasrabdi | Statue of Equality',
    singer: '',
    lyricist: '',
    youtubeUrl: 'https://youtu.be/cnR8Gbazy9s?si=J7H2zoBA4lCsLuFi',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '21',
    title:
      'Mimmu Nammi Untimayya | Ramanuja Keerthana | Tarak Music | Vijay Yesudas | మిమ్ము నమ్మి ఉంటిమయ్య',
    singer: 'Vijay Yesudas',
    lyricist: 'Sriman Koganti Venkatacharyulu',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/jY5m1w4t7Gs?si=G-rLomE1ru47ktW3',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '22',
    title: 'CHEVULAARA VINUDU | Ramanuja Keerthana | Tarak Music',
    singer: 'P. Taraka Ramarao',
    lyricist: 'T.P. Raghavacharya Dasan',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/8GkbxzljAhg?si=rC0mDTzt7N7067E6',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '23',
    title: 'Enni Marlani Vedukunduno | Pavan Charan | Ramanuja Keerthana',
    singer: 'Pavan Charan',
    lyricist: 'T.P. Raghavacharya Dasan',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/ImjryFnZ6Rs?si=6pikzWyOhpBL2YhX',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '24',
    title:
      '"Gana Gana Gana Gantala Bandi" a song from album Ramanuja Sthuthi Chandrika by P Taraka Ramarao',
    singer: 'Padala Taraka Ramarao',
    lyricist: 'Sri Koganti Venkatacharyulu',
    music: 'Padala Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/KZ2-0vsJiek?si=dZeYTzHiZ7ICoTKo',
    lyrics: ['Lyrics coming soon.'],
  },
  {
    id: '25',
    title:
      'Kadilindi Shanti Ratham a song from the album Ramanuja Sthuthi Chandrika by P Taraka Ramarao',
    singer: '',
    lyricist: 'Sri Koganti Venkatacharyulu',
    music: 'P. Taraka Ramarao',
    youtubeUrl: 'https://youtu.be/4nF5DVtcmeE?si=vMz_0gQOmyw7CTc5',
    lyrics: ['Lyrics coming soon.'],
  },
];
