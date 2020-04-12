import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div id="introduction">
      <header id="heading">
        Tri Vuong
      </header>
      <section>
        I'm a developer working on both the front end and back end with knowledge and
         passion for the web and mobile platforms, especially in these areas:
      </section>
      <section id="interests">
        <span className="expertise">JavaScript</span>
        <span className="expertise">Ruby</span>
        <span className="expertise">Rails</span>
        <span className="expertise">Go Lang</span>
        <span className="expertise">React Native</span>
        <span className="expertise">Machine Learning</span>
        <span className="expertise">Augmented Reality</span>
      </section>
      <section>Check out my other profiles</section>
      <section id="social-networks">
        <a href="https://github.com/trivektor">
          <img src="https://img.icons8.com/doodle/48/000000/github--v1.png"/>
        </a>
        <a href="https://twitter.com/trivektor">
          <img src="https://img.icons8.com/doodle/48/000000/twitter.png"/>
        </a>
        <a href="https://www.linkedin.com/in/tvuong/">
          <img src="https://img.icons8.com/doodle/48/000000/linkedin-circled.png"/>
        </a>
        <a href="https://www.instagram.com/trivektor">
          <img src="https://img.icons8.com/doodle/48/000000/instagram--v1.png"/>
        </a>
      </section>
    </div>
  );
}

export default App;
