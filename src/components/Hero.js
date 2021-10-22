import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src="" type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world!</HeroP>
          <Button>Travel now!</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -80px;
  padding: 0 1rem;
`;

const HeroBg = styled.div``;

const VideoBg = styled.video``;

const HeroContent = styled.div``;

const HeroItems = styled.div``;

const HeroH1 = styled.h1``;

const HeroP = styled.p``;
