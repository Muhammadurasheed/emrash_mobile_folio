import React, { useState } from "react";
import FadeIn from "../../FadeIn";
import healthify from '../../../assets/project-images/healthify.jpeg';
import notchAI from '../../../assets/project-images/notchAI.jpeg';
import inopLearn from '../../../assets/project-images/inopLearn.jpeg';
import shopflex from '../../../assets/project-images/shopflex.jpeg';
import wellness from '../../../assets/project-images/wellness.png';
import wiselypay from '../../../assets/project-images/wiselypay.jpeg';
import smarvium from '../../../assets/project-images/smarvium.jpeg';
import './Projects.css';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "iHealth",
      category: 'Crafts',
      projectURL: "https://drive.google.com/file/d/1f-Ufx0blkoPn8iDk04PaF1M3NPLznudL/view?usp=drive_link",
      demoURL: "https://drive.google.com/file/d/19ZXDtetYVuDDdTENOjx9-pQOuU8c-K6Y/view?usp=sharing",
      modelURL: "https://github.com/Muhammadurasheed/stroke-prediction-model.git",
      description: "AI-powered app integrated with fitness tracker to detect early heart stroke.",
      fullDescription: "Healthify is an innovative application that leverages AI to monitor health metrics through fitness trackers and detect early signs of heart strokes. The app provides real-time alerts and suggestions for maintaining heart health.",
      imageURL: healthify,
    },
    {
      id: 2,
      name: "NotchAI",
      category: 'Crafts',
      projectURL: "https://drive.google.com/file/d/1_LN1Hh8RpNYyo630OaMT2bHOsPsdBAlE/view?usp=sharing",
      demoURL: "https://drive.google.com/file/d/1A1qa7WNtrD7BGmMGLrOZfdAWOufLREaJ/view?usp=drive_link",
      modelURL: "https://github.com/Muhammadurasheed/notchAI-deep-learnig-model",
      description: "An AI-powered app to detect skin diseases and recommend solutions.",
      fullDescription: "NotchAI uses advanced AI algorithms to analyze skin conditions and provide accurate diagnoses. The app recommends personalized treatment plans and connects users with dermatologists for further consultation.",
      imageURL: notchAI,
    },
    {
      id: 3,
      name: "InopLearn",
      category: 'Crafts',
      projectURL: "https://play.google.com/store/apps/details?id=com.nnatech.inop_learn&pcampaignid=web_share",
      demoURL: "https://drive.google.com/file/d/17YdN2Hl1mrAUbQu_Q1CIt7SqHwainxWj/view?usp=drive_link",
      modelURL: "https://example.com/model-three",
      description: "An e-learning platform for visually impaired people.",
      fullDescription: "InopLearn is an accessible e-learning platform designed to assist visually impaired individuals in their education. It features AI-driven tools that convert text to speech, provide interactive learning modules, and offer real-time support.",
      imageURL: inopLearn,
    },
    {
      id: 4,
      name: "ShopFlex",
      category: 'Crafts',
      projectURL: "https://drive.google.com/file/d/1PHeAaVCDj1vaoH4B_JUx9ee_A0xHcFrr/view?usp=sharing",
      demoURL: "https://drive.google.com/file/d/17YdN2Hl1mrAUbQu_Q1CIt7SqHwainxWj/view?usp=drive_link",
      modelURL: "https://example.com/model-three",
      description: "An e-learning platform for visually impaired people.",
      fullDescription: "InopLearn is an accessible e-learning platform designed to assist visually impaired individuals in their education. It features AI-driven tools that convert text to speech, provide interactive learning modules, and offer real-time support.",
      imageURL: shopflex,
    },
    {
      id: 5,
      name: "WiselyPay",
      category: 'Crafts',
      projectURL: "https://drive.google.com/file/d/1vQBPE6sjs3DY4L8oRwX7stvX3QCS-jx4/view?usp=sharing",
      demoURL: "https://drive.google.com/file/d/17YdN2Hl1mrAUbQu_Q1CIt7SqHwainxWj/view?usp=drive_link",
      modelURL: "https://example.com/model-three",
      description: "An e-learning platform for visually impaired people.",
      fullDescription: "InopLearn is an accessible e-learning platform designed to assist visually impaired individuals in their education. It features AI-driven tools that convert text to speech, provide interactive learning modules, and offer real-time support.",
      imageURL: wiselypay,
    },
    {
      id: 6,
      name: "Save Persona",
      category: 'Crafts',
      projectURL: "https://play.google.com/store/apps/details?id=com.nnatech.inop_learn&pcampaignid=web_share",
      demoURL: "https://drive.google.com/file/d/17YdN2Hl1mrAUbQu_Q1CIt7SqHwainxWj/view?usp=drive_link",
      modelURL: "https://example.com/model-three",
      description: "An e-learning platform for visually impaired people.",
      fullDescription: "InopLearn is an accessible e-learning platform designed to assist visually impaired individuals in their education. It features AI-driven tools that convert text to speech, provide interactive learning modules, and offer real-time support.",
      imageURL: smarvium,
    },
  ];

  const categorizedProjects = projects.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {});

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className='projects'>
      {Object.keys(categorizedProjects).map(category => (
        <div key={category}>
          <h3 className='project-category-title'>{category}</h3>
          <ul className='project-list'>
            {categorizedProjects[category].map(project => {
              const { id, name, demoURL, description, imageURL } = project;
              return (
                <FadeIn key={id}>
                  <li className='project-item active'>
                    <figure className='project-img'>
                      <img src={imageURL} alt={name} loading='lazy' />
                    </figure>
                    <h3 className='project-title'>{name}</h3>
                    <p className='project-description'>{description}</p>
                    <div className='project-buttons'>
                      <a href={demoURL} className='form-btn' target='_blank' rel='noopener noreferrer'>
                        Demo
                      </a>
                      <button onClick={() => openModal(project)} className='form-btn'>
                        More Info
                      </button>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>
      ))}
      {selectedProject && (
        <div className='modal'>
          <div className='modal-content'>
            <span
              className='close'
              style={{
                color: '#ff0000',
                padding: '5px',
                backgroundColor: 'white',
                fontSize: '25px',
                cursor: 'pointer',
                position: 'absolute'

              }}
              onClick={closeModal}
            >
              &times;
            </span>
            <br />
            <br />
            <h2  className='modal-project-title'>{selectedProject.name}</h2>
            <p>{selectedProject.fullDescription}</p>
            <div className='project-buttons'>
              <a href={selectedProject.projectURL} className='form-btn' target='_blank' rel='noopener noreferrer'>
                Download Apk
              </a>
              <a href={selectedProject.modelURL} className='form-btn' target='_blank' rel='noopener noreferrer'>
               Model Github Link
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
