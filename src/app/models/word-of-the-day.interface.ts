export interface WordOfTheDay {
  _id: string;
  word: string;
  contentProvider: {
    name: string;
    id: number;
  };
  definitions: Definition[];
  publishDate: string;
  examples: Example[];
  pdd: string;
  note: string | null;
  htmlExtra: string | null;
}

export interface Definition {
  source: string;
  text: string;
  note: string | null;
  partOfSpeech: string;
}

export interface Example {
  url: string;
  title: string;
  text: string;
  id: number;
}
