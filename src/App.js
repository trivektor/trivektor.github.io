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
         enthusiasm for the web and mobile platforms, especially these areas:
      </section>
      <section id="interests">
        <span className="expertise">JavaScript</span>
        <span className="expertise">Ruby</span>
        <span className="expertise">Rails</span>
        <span className="expertise">GoLang</span>
        <span className="expertise">Rust</span>
        <span className="expertise">Swift</span>
        <span className="expertise">Python</span>
        <span className="expertise">React Native</span>
        <span className="expertise">Tensorflow</span>
        <span className="expertise">GraphQL</span>
        <span className="expertise">Web Assembly</span>
        <span className="expertise">Machine Learning</span>
        <span className="expertise">Augmented Reality</span>
        <span className="expertise">Software Architecture</span>
        <span className="expertise">Distributed Systems</span>
      </section>
      <section>Check out my other profiles</section>
      <section id="social-networks">
        <a href="https://github.com/trivektor">
          <img
            src="https://img.icons8.com/doodle/48/000000/github--v1.png"
            srcset="https://img.icons8.com/doodle/96/000000/github--v1.png 2x" />
        </a>
        <a href="https://twitter.com/trivektor">
          <img
            src="https://img.icons8.com/doodle/48/000000/twitter.png"
            srcset="https://img.icons8.com/doodle/96/000000/twitter.png 2x" />
        </a>
        <a href="https://www.linkedin.com/in/tvuong/">
          <img
            src="https://img.icons8.com/doodle/48/000000/linkedin-circled.png"
            srcset="https://img.icons8.com/doodle/96/000000/linkedin-circled.png 2x" />
        </a>
        <a href="https://www.instagram.com/trivektor">
          <img
            src="https://img.icons8.com/doodle/48/000000/instagram--v1.png"
            srcset="https://img.icons8.com/doodle/96/000000/instagram--v1.png 2x" />
        </a>
      </section>
    </div>
  );
}

export default App;
