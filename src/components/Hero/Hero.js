import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, welcome to <br />
        My personal Portifolio
      </SectionTitle>
      <SectionText>
        Developer web...
      </SectionText>
      <Button href="">Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;