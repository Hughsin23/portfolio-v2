import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br />
        I'm Hugh Sinclair, <br />
        a junior software engineer.
      </SectionTitle>
      <SectionText>
        I'm learning to make elegant, accessible apps that improve the lives of others. Along the way, I'm excited to expand my skills, technologies, and understanding of all things tech!
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/hugh-sinclair-dev/', "_Blank") }> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;