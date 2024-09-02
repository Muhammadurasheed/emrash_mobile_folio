import FadeIn from "../components/FadeIn";
import {
  Clients,
  Services,
  Testimonials,
} from "../components/PageSections/AboutSection";

import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <header>
        <FadeIn>
          <h2 className='h2 article-title'>Who am I?</h2>
        </FadeIn>
      </header>
      <section className='about-text'>
        <FadeIn>
          <p>
            Hi there👋! I'm Rasheed, an experienced Mobile Application Developer with over 5 years of experience in crafting high-performance mobile applications using Flutter. My journey in tech is driven by a passion for creating intuitive, user-friendly, and impactful solutions that address real-world challenges.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            Throughout my career, I've led and contributed to the development of scalable, maintainable, and performant mobile apps across diverse industries. I specialize in state management using GETX, Riverpod, and Bloc, and I'm proficient in integrating backend APIs, ensuring seamless user experiences on both Android and iOS platforms.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            My expertise extends beyond mobile development into AI/ML, where I leverage tools like TensorFlow and OpenAI to develop intelligent systems. Projects like NotchAI and INOP Learn, where I integrated AI models into mobile applications, highlight my ability to blend machine learning with app development to create innovative solutions.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            In addition to technical skills, I'm passionate about mentoring and knowledge sharing. As a Technical Mentor and Flutter Developer Team Lead, I've guided teams and students, fostering collaborative environments and driving technical growth within the community.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            My journey in tech is a blend of professional expertise and personal passions, including logical reasoning and traveling, which fuels my creativity and broadens my perspective. Let's connect and explore how we can innovate together to create impactful solutions!
          </p>
        </FadeIn>
      </section>
      <Services />
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Clients />
      </FadeIn>
    </article>
  );
};

export default About;
