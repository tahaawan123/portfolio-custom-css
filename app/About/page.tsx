import React from 'react';
import AboutCss from './About.module.css'; // Import custom CSS

const About = () => {
  return (
    <div className={AboutCss.aboutContainer}>
      <h1 className={AboutCss.aboutTitle}>
        About me
      </h1>
      <p className={AboutCss.aboutDescription}>
        Hello, I am Muhammad Taha, a passionate web developer with a solid foundation in HTML, CSS, and JavaScript. 
        I enjoy creating dynamic and responsive web applications that provide a great user experience. 
        My journey in web development has equipped me with the skills to bring ideas to life through code. 
        Currently, I am expanding my knowledge by learning Next.js, a powerful framework for building server-side rendered applications. 
        This has allowed me to deepen my understanding of modern web development practices and improve my ability to create efficient and scalable applications. 
        In addition to my technical skills, I am committed to continuous learning and staying updated with the latest trends and technologies in the web development field. 
        Balancing my studies with practical projects has been a rewarding challenge, as I strive to apply what I learn in real-world scenarios. 
        I am excited about the future of web development and look forward to taking on new challenges and collaborating with others in this dynamic field.

        Thank you for taking the time to learn more about me. I hope to connect with you soon!
      </p>
    </div>
  );
};

export default About;