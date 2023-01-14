import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_LANGUAGE } from "../graphql/queries";
import { Country, LanguagesProps } from "../types/types";

const Languages: React.FC<LanguagesProps> = ({
  countryCode,
}: LanguagesProps) => {
  const [getLanguage, { loading, error, data }] = useLazyQuery(GET_LANGUAGE);
  useEffect(() => {
    getLanguage({ variables: { code: countryCode } });
  }, [countryCode]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const country: Country = data?.country;

  return (
    <div>
      {data && (
        <p>
          {country.languages[0].name} {country.emoji}
        </p>
      )}
    </div>
  );
};
export default Languages;
