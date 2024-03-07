import styled from 'styled-components';

import Search from './Search';
import { useCountriesListSize } from '../hooks/useCountriesListSize';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  grid-column: 1 / -1;
`;

const Searchlist = styled.p`
  color: var(--color-stone-300);
  font-weight: 600;
`;

function Header() {
  const { listSize } = useCountriesListSize();

  return (
    <StyledHeader>
      <Searchlist>Found {listSize} countries</Searchlist>
      <Search />
    </StyledHeader>
  );
}

export default Header;
