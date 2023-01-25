export interface Countries<T> {
    [x: string]: any;
    countries: [
      {
        name: T;
        code: T;
        __typename?: T;
      }
    ]|[]
};
export interface Country<T> {
    emoji?: T;
    languages: {
      name: T;
      __typename?: T;
    }[];
  }
export  interface LanguagesProps {
    countryCode: string;
  }
  