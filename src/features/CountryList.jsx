import styled from 'styled-components';

import CountryItem from './CountryItem';
import { useCountries } from '../hooks/useCountries';

const StyledCountryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(4, 1fr);
  column-gap: 48px;
  margin-bottom: 16px;
  padding-bottom: 20px;
  color: var(--color-stone-300);
  font-size: var(--font-size-sm);
  font-weight: 600;
  border-bottom: 2px solid var(--color-stone-600);
`;

function CountryList() {
  const { countries, isLoading } = useCountries();

  if (isLoading) return null;

  return (
    <div>
      <Header>
        <span>Flag</span>
        <span>Name</span>
        <span>Population</span>
        <span>Area(km²)</span>
        <span>Region</span>
        <span></span>
      </Header>
      <StyledCountryList>
        {countries.map(country => (
          <CountryItem key={country.altSpellings} country={country} />
        ))}
      </StyledCountryList>
    </div>
  );
}

export default CountryList;
