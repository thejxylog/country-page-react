import { useState } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside``;

function Sidebar({ countryList, onCountryList }) {
  const [sortBy, setSortBy] = useState('population');
  const [region, setRegion] = useState('');

  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
