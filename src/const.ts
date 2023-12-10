import { PeriodEventsType, PeriodType } from './types';

export const radius = 265;

const periodEvents1: PeriodEventsType[] = [
  {
    key: 1,
    year: 1882,
    eventDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    key: 2,
    year: 1882,
    eventDescription: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    key: 3,
    year: 1882,
    eventDescription:
      'cing elit. Consequatur autem omnis minusum deserunt quaerat?',
  },
  {
    key: 4,
    year: 1882,
    eventDescription:
      'Lorem ipsum  autem omnis minus voue ab magni  repellat, iunt quaerat?',
  },
];
const periodEvents2: PeriodEventsType[] = [
  {
    key: 1,
    year: 1882,
    eventDescription:
      'Lorem ipsu voluptatem adipisci totam veniam. Atque ab magni impedit repellat, iure,deserunt quaerat?',
  },
  {
    key: 2,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis ptatem adipisci',
  },
  {
    key: 3,
    year: 1882,
    eventDescription:
      ' sit asectetur adip elit. Consequ omnis minus voluptates voluptatem adipisci',
  },
  {
    key: 4,
    year: 1882,
    eventDescription: 'Lorem ipsum dolor sit amet consec adip elit.  au omni',
  },
];
export const periodsList: PeriodType[] = [
  {
    id: 1,
    years: {
      start: 1950,
      end: 1960,
    },
    title: 'Литература',
    periodEvents: periodEvents1,
  },
  {
    id: 2,
    years: {
      start: 1960,
      end: 1970,
    },
    title: 'Кино',
    periodEvents: periodEvents2,
  },
  {
    id: 3,
    years: {
      start: 1980,
      end: 1990,
    },
    title: 'Музыка',
    periodEvents: periodEvents1,
  },
  {
    id: 4,
    years: {
      start: 1990,
      end: 2000,
    },
    title: 'История',
    periodEvents: periodEvents2,
  },
];
