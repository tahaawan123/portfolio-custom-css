import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import FooterCss from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={FooterCss.footer}>
        <h2 className={FooterCss.footerText}>All rights reserved © 2024</h2>
        <div className={FooterCss.footerContent}>
          <div className={FooterCss.contactItem}>
            <HiOutlineMail className={FooterCss.icon} />
            <p className={FooterCss.contactText}>Email: tahaawan598@gmail.com</p>
          </div>

          <div className={FooterCss.contactItem}>
            <FiPhoneForwarded className={FooterCss.icon} />
            <p className={FooterCss.contactText}>Phone Number: 03082520161</p>
          </div>

          <div className={FooterCss.contactItem}>
            <Link href="https://www.linkedin.com/in/muhammad-taha-4735912b6/">
              <CiLinkedin className={FooterCss.icon} /> LinkedIn
            </Link>
          </div>

          <div className={FooterCss.contactItem}>
            <Link href="https://github.com/tahaawan123">
              <FaGithubSquare className={FooterCss.icon} /> GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;