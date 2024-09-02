import React from 'react';
import FadeIn from '../../FadeIn';
import flutter from '../../../assets/images/flutter.png';
import nodejs from '../../../assets/images/nodejs.png';
import graphql from '../../../assets/images/graphql.jpeg';
import mongodb from '../../../assets/images/mongodb.jpeg';
import firebase from '../../../assets/images/firebase.jpeg';
import docker from '../../../assets/images/docker.png';
import aws from '../../../assets/images/aws.png';
import gcp from '../../../assets/images/gcp.png';
import git from '../../../assets/images/git.jpeg';
import figma from '../../../assets/images/figma.jpeg';
import adobeXD from '../../../assets/images/adobeXD.jpeg';
import androidStudio from '../../../assets/images/androidStudio.png';
import xcode from '../../../assets/images/xcode.jpeg';
import linux from '../../../assets/images/linux.jpeg';
import postgresql from '../../../assets/images/postgresql.jpeg';

const ToolsAndFramework = () => {
  const tools = [
    { name: "Flutter", src: flutter, alt: "Flutter" },
    { name: "Node.js", src: nodejs, alt: "Node.js" },
    { name: "GraphQL", src: graphql, alt: "GraphQL" },
    { name: "MongoDB", src: mongodb, alt: "MongoDB" },
    { name: "Firebase", src: firebase, alt: "Firebase" },
    { name: "Docker", src: docker, alt: "Docker" },
    { name: "AWS", src: aws, alt: "AWS" },
    { name: "GCP", src: gcp, alt: "GCP" },
    { name: "Git", src: git, alt: "Git" },
    { name: "Figma", src: figma, alt: "Figma" },
    { name: "Adobe XD", src: adobeXD, alt: "Adobe XD" },
    { name: "Android Studio", src: androidStudio, alt: "Android Studio" },
    { name: "Xcode", src: xcode, alt: "Xcode" },
    { name: "Linux", src: linux, alt: "Linux" },
    { name: "PostgreSQL", src: postgresql, alt: "PostgreSQL" },
  ];

  return (
    <FadeIn className='skill'>
      <h3 className='h3'>Tools & Frameworks</h3>
      <section className='tools-list content-card'>
        <div className="tools-list">
          {tools.map(tool => (
            <div key={tool.name} className="bar-gap">
              <div className="infos">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-icon">
                  <img src={tool.src} alt={tool.alt} className="tool-image" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default ToolsAndFramework;

