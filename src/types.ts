export type PeriodEventsType = {
  key: number;
  year: number;
  eventDescription: string;
};

export type PeriodType = {
  id: number;
  years: {
    start: number;
    end: number;
  };
  title: string;
  periodEvents: PeriodEventsType[];
};
