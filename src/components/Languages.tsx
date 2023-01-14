import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_LANGUAGE } from "../graphql/queries";
import { Country, LanguagesProps } from "../types/types";

const Languages: React.FC<LanguagesProps> = ({
  countryCode,
}: LanguagesProps) => {
  const [getLanguage, { loading, error, data }] = useLazyQuery(GET_LANGUAGE);
  const country: Country = {
    emoji: data?.country.emoji,
    languages: data?.country.languages
  }

  //fetches language for only one selected country incl default
  useEffect(() => {
    getLanguage({ variables: { code: countryCode } });
  }, [countryCode, getLanguage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;


  return (
    <div>
      {data && <> {country.languages.map((language) => <p key={language.name}>{language.name}</p>)} </>}
      {country.emoji}
    </div>
  );
};
export default Languages;
