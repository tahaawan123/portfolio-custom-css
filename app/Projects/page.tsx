import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectsCss from './Project.module.css'; // Import custom CSS

const Projects = () => {
  return (
    <div className={ProjectsCss.projectsContainer}>
      <h2 className={ProjectsCss.projectsTitle}>PROJECTS</h2>

      {/* 1st Project */}
      <div className={ProjectsCss.project}>
        <Image src="/gym.png" alt="Gym Website" width={900} height={400} className={ProjectsCss.projectImage} />
        <div className={ProjectsCss.projectLinkContainer}>
          <Link href="https://gym-website-custom-css.vercel.app/" target="_blank">
            Gym Website
          </Link>
        </div>
      </div>

      {/* 2nd project */}
      <div className={ProjectsCss.project}>
        <Image src="/pakistanTravel.png" alt="Pakistan Travel Places" width={900} height={400} className={ProjectsCss.projectImage} />
        <div className={ProjectsCss.projectLinkContainer}>
          <Link href="https://pakistan-travel-places.vercel.app/" target="_blank">
            Pakistan Travel Places
          </Link>
        </div>
      </div>

      {/* 3rd project */}
      <div className={ProjectsCss.project}>
        <Image src="/resume.png" alt="Dynamic Resume Builder" width={900} height={400} className={ProjectsCss.projectImage} />
        <div className={ProjectsCss.projectLinkContainer}>
          <Link href="https://hackathon-milestone.vercel.app/" target="_blank">
            Dynamic Resume Builder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;