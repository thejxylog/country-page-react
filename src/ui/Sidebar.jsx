import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';

import FormRow from './FormRow';
import SortBy from '../features/Filters/SortBy';
import Region from '../features/Filters/Region';
import Status from '../features/Filters/Status';

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SortBy />
      <Region />
      <Status />
    </StyledSidebar>
  );
}

export default Sidebar;
