import styled from 'styled-components';
import Sidebar from '../ui/Sidebar';
import CountryList from '../fetures/CountryList';
import Header from '../ui/Header';
import { useEffect, useState } from 'react';
import { useCountries } from '../hooks/useCountries';

const StyledHomepage = styled.div``;

function Homepage() {
  const { countries, isLoading } = useCountries();
  const [countryList, setCountryList] = useState(() =>
    countries ? countries : []
  );

  useEffect(
    function () {
      if (!isLoading) setCountryList(countries);
    },
    [isLoading, countries]
  );

  return (
    <>
      <Header />
      <Sidebar countryList={countryList} onCountryList={setCountryList} />
      <CountryList countryList={countryList} />
    </>
  );
}

export default Homepage;
