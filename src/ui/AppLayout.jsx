import styled from 'styled-components';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';
import Main from './Main';

const StyledAppLayout = styled.div``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Hero />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
