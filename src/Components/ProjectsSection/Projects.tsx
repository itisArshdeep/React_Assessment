import React from 'react';
import './Projects.css';

// icons
import bow from '../../images/bow.png';
import arrow from '../../images/arrow.png';

// project data & type
import projects from '../../assets/projects';
import type { Project } from '../../assets/projects';

const Projects: React.FC = () => {
  return (
    <div id='projects' className='mywork'>
      <div className='mywork-title'>
        <h1>My Projects</h1>
        <img src={bow} alt='' />
      </div>

      <div className='mywork-container'>
        {projects.map((project: Project) => (
          <div key={project.p_no} className='project-card'>
            <a
              href={project.p_link}
              target='_blank'
              rel='noopener noreferrer'
              title={project.p_name}
            >
              <img src={project.p_img} alt={project.p_name} className='project-image' />
            </a>
            <div className='project-info'>
              <h3>{project.p_name}</h3>
              <p>This is a live production-ready website developed using modern frontend technologies.</p>
              <a href={project.p_link} target='_blank' rel='noopener noreferrer' className='project-link'>
                Visit Site →
              </a>
            </div>
          </div>
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
