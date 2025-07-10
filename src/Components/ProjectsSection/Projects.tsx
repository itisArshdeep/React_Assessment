import React from 'react';
import './Projects.css';

// icons
import bow from '../../images/bow.png';
import arrow from '../../images/arrow.png';

// project data & type
import projects, { Project } from '../../assets/projects';

const Projects: React.FC = () => {
  return (
    <div id='projects' className='mywork'>
      <div className='mywork-title'>
        <h1>My Projects</h1>
        <img src={bow} alt='' />
      </div>
      <div className='mywork-container'>
        {projects.map((project: Project) => (
          <img
            key={project.p_no}
            src={project.p_img}
            alt={project.p_name}
            title={project.p_name}
          />
        ))}
      </div>
      <div className='mywork-showmore'>
        <p>
          <a href='https://github.com/itisArshdeep' target='_blank' rel='noopener noreferrer'>
            Show More
          </a>
        </p>
        <img style={{ height: '40px', width: '40px' }} src={arrow} alt='' />
      </div>
    </div>
  );
};

export default Projects;
