export interface Countries {
    [x: string]: any;
    countries: [
      {
        name: string;
        code: string;
        __typename?: string;
      }
    ]|[]
};
export interface Country {
    emoji?: string;
    languages: {
      name: string;
    }[];
  }
export  interface LanguagesProps {
    countryCode: string;
  }
  