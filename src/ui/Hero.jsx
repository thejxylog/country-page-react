import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHero = styled.section`
  width: 100dvw;
  height: 300px;
  position: relative;

  background-image: url('/hero-image-wr.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Logo = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Hero() {
  return (
    <StyledHero>
      <Logo to="/">
        <img src="/Logo.svg" />
      </Logo>
    </StyledHero>
  );
}

export default Hero;
