import FormatResumeDisplay from "./FormatResumeDisplay";

import { experience } from "../../../data/resume-data";

const Experience = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>
        <h3 className='h3'>Experience</h3>
      </div>
      <FormatResumeDisplay data={experience} />
    </section>
  );
};
export default Experience;
