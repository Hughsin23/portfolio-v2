import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// constants helps seperate logic from content
import { projects } from '../../constants/constants';

const projectsDemo = [
  {
    title: 'Project 1',
    description: "This is a description for this project" 
  },
  {
    title: 'Project 2',
    description: "This is a description for this project" 
  },
  {
    title: 'Project 3',
    description: "This is a description for this project" 
  },
  {
    title: 'Project 4',
    description: "This is a description for this project" 
  }
];


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemo.map((project) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;