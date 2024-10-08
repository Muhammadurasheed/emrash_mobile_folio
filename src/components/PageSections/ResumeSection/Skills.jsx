import { skills } from "../../../data/resume-data";
import FadeIn from "../../FadeIn";

const Skills = () => {
  return (
    <FadeIn className='skill'>
      <h3 className='h3 skills-title'>SKILLS & COMPETENCIES</h3>

      <ul className='skills-list content-card'>
        {skills.map(({ skill, progress }) => {
          return (
            <li className='skills-item'>
              <div className='title-wrapper'>
                <h5 className='h5'>{skill}</h5>
              </div>

              <div className='skill-progress-bg'>
                <div
                  className='skill-progress-fill'
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </FadeIn>
  );
};
export default Skills;
