import { useQuery } from "@apollo/client";
import Languages from "./Languages";
import { GET_COUNTRIES } from "../graphql/queries";
import React from "react";
import { Countries } from "../types/types";

const CountryList: React.FC<{}> = () => {
  const [countryCode, setCountryCode] = React.useState<string>("AF");
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const countries: Countries = data?.countries;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


  return (
    <div id="country-list">
      <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
        {countries?.map((country:any) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <Languages countryCode={countryCode} />
    </div>
  );
};
export default CountryList;
