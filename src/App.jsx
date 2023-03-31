import './App.scss';

import Alice from "./assets/images/Alice.jpg";
import TestPdf from "./assets/pdfs/pdfTest.pdf";

import RevitLogo from "./assets/images/RevitLogo.png";
import RevitApiPdf from "./assets/pdfs/WPF_Standardization.pdf";

import WPFStandardizationLogo from "./assets/images/WpfStandardizationLogo.png";
import WPFGif from "./assets/images/wpf1.gif"
import ExternalLink from "./assets/images/externalLink.png";
import WPFStandardizationPdf from "./assets/pdfs/WPF_Standardization.pdf";
import { FaExternalLinkAlt } from 'react-icons/fa';

import React from 'react'
import { useRef } from 'react';


function App() {

  const wpfStandardizationSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <div className="header section parallax parallax-0">
        <div className="centered-layout">
          <div>
            <h1>Gabriel Jolin</h1>
            <h2>Developer Portfolio</h2>
          </div>
        </div>
        <div className="arrow bounce">
          <a
            href="#wpf-standardization"
            onClick={() => scrollToSection(wpfStandardizationSection)}
          >
            &#10148;
          </a>
        </div>
      </div>

      <div
        className="wpf-standardization section"
        ref={wpfStandardizationSection}
      >
        <div className="section-content">
          <div className="content-title">
            <img src={WPFStandardizationLogo} />
            <h1 className="content-titles">WPF Standardization</h1>
            <a href="./assets/pdfs/pdfTest.pdf"><FaExternalLinkAlt /></a>
          </div>
          <img src={WPFGif} />
          <section className="content">
            <p>
              Standardization of WPF user controls in UI design is vital for
              scalability. Additionally, there are several useful controls not
              provided out-of-the box with .net user controls. Here is how I've
              helped standardize the use of WPF in applications.
            </p>
          </section>
        </div>
        
        <div className="arrow bounce">
          <a
            href="#wpf-standardization"
            onClick={() => scrollToSection(wpfStandardizationSection)}
          >
            &#10148;
          </a>
        </div>
      </div>
      <div className="revit section parallax parallax-1"></div>
      <div className="footer section parallax parallax-2">Section 3</div>
    </div>
  );
}

export default App;