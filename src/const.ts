import { PeriodEventsType, PeriodType } from './types';

const periodEvents1: PeriodEventsType[] = [
  {
    key: 1,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci totam veniam. Atque ab magni impedit repellat, iure, laboriosam praesentium provident esse dolorum deserunt quaerat?',
  },
  {
    key: 2,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci totam veniam. Atque ab magni impedit repellat, iure, laboriosam praesentium provident esse dolorum deserunt quaerat?',
  },
  {
    key: 3,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci totam veniam. Atque ab magni impedit repellat, iure, laboriosam praesentium provident esse dolorum deserunt quaerat?',
  },
  {
    key: 4,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci totam veniam. Atque ab magni impedit repellat, iure, laboriosam praesentium provident esse dolorum deserunt quaerat?',
  },
];
const periodEvents2: PeriodEventsType[] = [
  {
    key: 1,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci totam veniam. Atque ab magni impedit repellat, iure, laboriosam praesentium provident esse dolorum deserunt quaerat?',
  },
  {
    key: 2,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci',
  },
  {
    key: 3,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci',
  },
  {
    key: 4,
    year: 1882,
    eventDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem omnis minus voluptates voluptatem adipisci ',
  },
];
export const periodList: PeriodType[] = [
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
    title: 'Литература',
    periodEvents: periodEvents2,
  },
  {
    id: 3,
    years: {
      start: 1980,
      end: 1990,
    },
    title: 'Литература',
    periodEvents: periodEvents1,
  },
];
