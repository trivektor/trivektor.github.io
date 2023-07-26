import profilePic from "./profile-pic.png";
import Contact from "./contact";

const Home = () => {
  return (
    <main>
      <section className="card">
        <section>
          <div>
            <img id="profile-pic" src={profilePic.src} />
            <div id="tag-line">
              <h1 id="name">Tri Vuong</h1>
              <div>Unlocking the Web's Potential: Your Vision, My Code.</div>
            </div>
          </div>
          <p>
            Hey there! I'm a passionate web developer who loves crafting
            beautiful and functional websites. With a keyboard at my fingertips
            and a creative mind at work, I'm on a mission to make the web a
            better place, one line of code at a time.
          </p>
          <h4>💻 Bringing Ideas to Life</h4>
          <p>
            From conceptualizing eye-catching designs to bringing them to life
            with HTML, CSS, and JavaScript ✨, I thrive on turning innovative
            ideas into fully functional websites. Whether it's a sleek
            portfolio, a dynamic web app, or an intuitive user interface, I pour
            my heart into every project I undertake.
          </p>
          <h4>🌐 Embracing the Power of the Web</h4>
          <p>
            The web is a vast playground of endless possibilities, and I'm
            always excited to explore new technologies and frameworks 🎯.
            Constantly learning and growing in this ever-evolving landscape is
            what keeps me energized and inspired to create exceptional digital
            experiences.
          </p>
          <h4>🌟 Collaborate and Innovate</h4>
          <p>
            Collaboration is at the heart of what I do. Working with like-minded
            individuals and teams allows me to learn from others while
            contributing my skills to exciting projects 🤝. Let's create
            something amazing together!
          </p>
          <h4>📚 Knowledge Sharing</h4>
          <p>
            I believe in the power of knowledge sharing. When I'm not coding,
            you can find me writing helpful blog posts, creating coding
            tutorials, and participating in web development communities to give
            back 📝. Learning is a journey, and I'm thrilled to have you
            alongside me.
          </p>
          <h4>📈 Always Evolving</h4>
          <p>
            The world of web development is fast-paced and ever-changing. I'm
            committed to staying up-to-date with the latest trends and best
            practices, ensuring that my work stands at the forefront of modern
            web development.
          </p>
          <h4>✉️ Get in Touch!</h4>
          <p>
            Thank you for visiting my portfolio. I'm eager to connect with
            fellow developers, clients, and anyone with a passion for the web.
            Let's discuss your next project or just geek out about web
            development! Feel free to drop me a message using the contact form
            below. Let's build something extraordinary together! 🚀
          </p>
          <a
            className="btn"
            href="https://docs.google.com/document/d/1ludtuLBCF1Too4wHOXu6xN5O5L_aej_L1foKm_cOwbo/edit?usp=sharing"
            target="_blank"
          >
            View My Resume
          </a>
        </section>
        <section>
          <h2 className="section-heading">Tech Stack</h2>
          <ul id="tech-stack">
            <li>Vue JS</li>
            <li>React JS</li>
            <li>Svelte JS</li>
            <li>Node JS</li>
            <li>Ruby</li>
            <li>Go</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </section>
        <section>
          <h2 className="section-heading">Projects</h2>
          <ul>
            <li>
              <a
                href="https://svelte-interview-questions-generator.vercel.app/"
                target="_blank"
              >
                ChatGPT Interview Questions Generator
              </a>
            </li>
            <li>
              <a href="https://next-resume-builder.vercel.app/" target="_blank">
                Next Resume Builder
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="section-heading">Contact</h2>
          <Contact />
        </section>
      </section>
    </main>
  );
};

export default Home;
