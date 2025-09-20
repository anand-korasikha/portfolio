import { useEffect } from 'react';
import './App.css';
import html from './assets/imgs/html.svg';
import css from './assets/imgs/css.svg';
import bootstrap from './assets/imgs/bootstrap.svg';
import js from './assets/imgs/js.svg';
import mysql from './assets/imgs/mysql.svg';
import figma from './assets/imgs/figma.svg';
import star from './assets/imgs/star.svg';
import emptyStar from './assets/imgs/empty-star.svg';
import infodoc from './assets/imgs/infodoc.png';
import cgpa from './assets/imgs/cgpa.png';
import me from './assets/imgs/me.jpg';
import menu from './assets/imgs/menu.svg';
import java from './assets/imgs/java.svg';
import ParticlesComponent from './ParticlesComponent.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // duration of animation in milliseconds
      easing: 'ease-in-out', // animation timing function
      once: true, // animation happens only once on scroll
    });
  }, []);

  return (
    <section>
      <ParticlesComponent id="particlesBG" />
      <Header />
      <MainContent />
      <Skills />
      <Projects />
      <Footer />
    </section>
  );
};

const Header = () => (
  <div className="bg-primaryPink">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button
        className="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"><img className='w-100' src={menu} alt="" /></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <a className="nav-link text-dark text-decoration-none h5" href="#Skills">SKILLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark text-decoration-none h5" href="#Contact">CONTACT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark text-decoration-none h5" href="#Projects">PROJECTS</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</div>
);

const MainContent = () => (
  <>
    <div className="wrapper d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
      <div className="font-cursive text-white display-1 position-relative text-center mb-4">
       Korasikha Anand Kumar
  <p className="font-inter text-white text1 h1">Hello! it&apos;s me,</p>
        <p className="font-inter text-white text2 h1">~ Frontend Developer/Java Developer</p>
      </div>
      <SocialIcons />
    </div>
  <div><br />
    
    <AboutMe />
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
  </>
);

const SocialIcons = () => (
  <div className="icons d-flex justify-content-center gap-5 mt-5">
    <a href="mailto:anandkorasikha7098@gmail.com" className='text-white'><ion-icon name="mail-outline" className="text-white" style={{ width: 40, height: 40, cursor: 'pointer' }} /></a>
    <a href="https://www.linkedin.com/in/korasikha-anand-kumar-73200b248" className='text-white'><ion-icon name="logo-linkedin" className="text-white" style={{ width: 40, height: 40, cursor: 'pointer' }} /></a>
    <a href="https://github.com/anandkorasikha7098-png/portfolio.git" className='text-white'><ion-icon name="logo-github" className="text-white" style={{ width: 40, height: 40, cursor: 'pointer' }} /></a>
  </div>
);

const AboutMe = () => (
  <>
    <div className="row container mt-2">
      <div className="col-md-7 col-sm-12 d-flex justify-content-center">
        <img className="mt-4 potrait" src={me} alt="Profile" data-aos="fade-right"/>
      </div>
      <div className="col-md-5 col-sm-12 d-flex align-items-center" data-aos="fade-left">
        <p className="mt-5 text-start container text-white about-txt">
        <h2 className="text-white text-start">About me</h2><br />
          I’m a passionate Front-End and Java Developer with hands-on experience in building responsive web applications, scalable backend systems, and user-focused solutions. I specialize in crafting clean, efficient code and bringing ideas to life through intuitive design and robust functionality. 
        </p>
      </div>
    </div>
    <div className='d-flex flex-column align-items-center justify-content-center mt-4' data-aos="fade-up">
      <p className="text-white">Know more about me!</p>
      <a className="btn btn-outline-pink" href="https://drive.google.com/file/d/1aw-UyUEQYKJ0Zl9JNE0ho4_e-oQJKY4H/view?usp=sharing">Download CV</a>
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <p className='green me-2'></p>
        <p className="text-white">Available for hire</p>
      </div>
    </div>
  </>
);

const Skills = () => (
  <>
    <h2 id='Skills' className="mb-4 text-white text-center" data-aos="fade-up">Skills</h2>
    <div className="row" data-aos="fade-up">
      <div className="col-12 d-flex justify-content-center gap-md-3 gap-sm-0">
        {['HTML', 'CSS', 'Bootstrap', 'JS', 'MySQL', 'Figma','Java'].map(skill => (
          <p key={skill} className="bg-pink rounded">{skill}</p>
        ))}
      </div>
    </div>
    

    <div className="container mb-5">
      <div className="row mt-4 bg-pink-light">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={figma} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-4">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={html} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={emptyStar} alt="" />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-4 bg-pink-light">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={css} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={emptyStar} alt="Star" />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-4">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={js} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={emptyStar} alt="Star" />
          <img src={emptyStar} alt="Star" />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-4 bg-pink-light">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={bootstrap} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={emptyStar} alt="Star" />
          <img src={emptyStar} alt="Star" />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-4 mb-5">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={mysql} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={emptyStar} alt="Star" />
          <img src={emptyStar} alt="Star" />
        </div>
        <div className="col-1"></div>
      </div>
     <div className="row mt-4 bg-pink-light">
        <div className="col-1"></div>
        <div className="col-5 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <img className='svg' src={java} alt="" />
        </div>
        <div className="col-5 stars d-flex justify-content-around align-items-center" data-aos="fade-left">
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={star} alt="Star" />
          <img src={emptyStar} alt="Star" />
        </div>
        <div className="col-1"></div>
      </div>
     
    </div>
  </>
  
);


const Projects = () => (
  <>
    {/* {[
      { src: infodoc, title: 'InfoDoc - Online doctor infosite in local area' },
      { src: cgpa, title: 'GPA Calculator for K.S.Rangasamy College of Technology' },
      ].map((project, index) => (
        
        ))} */}
    <h2 className="text-white text-center mb-5 mt-5" data-aos="fade-up">Projects</h2>
    <div className="d-flex flex-column align-items-center justify-content-center projects" id="Projects">
      <div className="row" data-aos="fade-up">
        <div className="col-md-2 col-sm-1"></div>
        <div className="col-md-8 col-sm-10">
          <div className="card mb-5 bg-dark border border-white p-3">
            <img className="card-img-top" src={infodoc} alt="Project Screenshot" />
            <div className="card-body">
              <p className="h5 text-center text-white card-text"> INAPPROPRIATE CONTENT DETECTION AND CLASSIFICATION OF YOUTUBE VIDEOS </p> 
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-1"></div>
      </div>
      <div className="row" data-aos="fade-up">
        <div className="col-md-2 col-sm-1"></div>
        <div className="col-md-8 col-sm-10">
          <div className="card mb-5 bg-dark border border-white p-3">
            <img className="card-img-top" src={cgpa} alt="Project Screenshot" />
            <div className="card-body">
              <p className="h5 text-center text-white card-text">Predicting Employee Burnout Rate Using Neural Network </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-1"></div>
      </div>
    </div>
  </>
);


const Footer = () => (
  <footer id='Contact'>
    <p className='h5 text-center text-white pt-5'>For Collaboration purpose feel free to reach me out!</p>
    <p className='h6 text-center text-white pb-3'>Contact me through</p>
    <div className="row">
      <div className='col-md-3 col-sm-1'></div>
      <form className='col-md-6 col-sm-10'>
        <li className="list-unstyled">Name</li>
        <input 
            className="form-control" 
            placeholder="Your name" 
            type="text"
            required 
        /><br />
        <li className="list-unstyled">Email</li>
        <input 
            className="form-control" 
            placeholder="Your email" 
            type="email" 
            required 
        /><br />
        <li className="list-unstyled">Message</li>
        <textarea 
            className="form-control" 
            placeholder="Your message"
            required 
        /><br /><br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    <div className='col-md-3 col-sm-1'></div>
    
    
    <div className="icons d-flex justify-content-center gap-5 pb-4">
      <a className='text-white' href="mailto:anandkorasikha@gmail.com"><ion-icon name="mail-outline" className="text-white" style={{ width: 40, height: 40, cursor: 'pointer' }} /></a>
      <a className='text-white' href="www.linkedin.com/in/korasikha-anand-kumar-73200b248/"><ion-icon name="logo-linkedin" className="text-white" style={{ width: 40, height: 40, cursor: 'pointer' }} /></a>
      <a className='text-white' href="https://github.com/Deepi-2704"><ion-icon name="logo-github" className="text-white" style={{ width: 40, height: 40, cursor: 'pointer' }} /></a>
    </div>
  </footer>
);

export default App;
