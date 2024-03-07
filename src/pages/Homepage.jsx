import styled from 'styled-components';
import Sidebar from '../ui/Sidebar';
import CountryList from '../features/CountryList';
import Header from '../ui/Header';
import { useEffect, useState } from 'react';
import { useCountries } from '../hooks/useCountries';

const StyledHomepage = styled.div``;

function Homepage() {
  return (
    <>
      <Header />
      <Sidebar />
      <CountryList />
    </>
  );
}

export default Homepage;
