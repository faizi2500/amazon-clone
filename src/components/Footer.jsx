import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';
import './footer.css';

const Footer = () => {
  console.log('footer');
  return (
    <div className="footer-section">
      <p>This is an Amazon clone created by - Faizan Zahid</p>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/faizan2500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin style={{ color: 'white' }} />
        </a>
        <a
          href="https://github.com/faizi2500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub style={{ color: 'white' }} />
        </a>
        <a
          href="https://twitter.com/codewithfaizi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter style={{ color: 'white' }} />
        </a>
        <a
          href="https://codewithfaizi.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHashnode style={{ color: 'white' }} />
        </a>
      </div>
      <div className="link-to-repo">
        <p>
          Check out the source code -&gt;
          {'\u00a0'}
        </p>
        <a
          href="https://github.com/faizi2500/amazon-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Footer;
