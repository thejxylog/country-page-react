import styled from 'styled-components';

import Search from './Search';
import { useCountries } from '../hooks/useCountries';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  grid-column: 1 / -1;
`;

const Searchlist = styled.p`
  color: var(--color-stone-300);
`;

function Header() {
  const { countries } = useCountries();

  return (
    <StyledHeader>
      <Searchlist>Found {countries?.length} countries</Searchlist>
      <Search />
    </StyledHeader>
  );
}

export default Header;
