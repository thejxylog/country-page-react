import styled from 'styled-components';
import { useCountries } from '../hooks/useCountries';

const StyledCountryList = styled.ul``;

function CountryList({ countryList }) {
  // const { countries } = useCountries();

  console.log(countryList);

  return <StyledCountryList>CountryList</StyledCountryList>;
}

export default CountryList;
