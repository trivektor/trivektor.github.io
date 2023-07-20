import profilePic from "./picofme.png";

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
            Hi there! I'm Tri, a passionate JavaScript developer with over 10
            years of experience in the field. Throughout my journey, I've had
            the privilege of working extensively with both Vue and React,
            crafting dynamic and intuitive user interfaces that leave a lasting
            impact.
          </p>
          <p>
            From the early days of my career, I was drawn to the power and
            flexibility of JavaScript, and it didn't take long for me to realize
            its potential in building modern web applications. Over time, I
            honed my skills and became well-versed in the intricacies of Vue and
            React, two frameworks that have revolutionized the way we create web
            experiences.
          </p>
          <p>
            I find great joy in bringing ideas to life through code, turning
            complex problems into elegant solutions. Whether it's architecting
            the frontend of a large-scale application or collaborating with a
            team to deliver outstanding user experiences, I thrive on challenges
            that push my boundaries.
          </p>
          <p>
            My journey as a JavaScript developer has been a continuous learning
            experience. Staying up-to-date with the latest trends and best
            practices is vital in this ever-evolving landscape. Throughout my
            career, I've contributed to open-source projects, attended
            conferences, and actively engaged with the developer community to
            share insights and gain knowledge.
          </p>
          <p>
            Aside from technical expertise, I pride myself on being a team
            player and an effective communicator. I believe that fostering a
            collaborative and inclusive environment leads to better outcomes and
            a stronger team spirit. I enjoy mentoring junior developers and
            believe in the importance of cultivating a learning culture within
            the organization.
          </p>
          <p>
            As I reflect on my journey as a JavaScript developer, I am grateful
            for the opportunities that have come my way, the challenges that
            have helped me grow, and the incredible people I've had the pleasure
            of working with. I'm excited about the future of web development and
            can't wait to see where the next 10 years take me in this
            ever-thriving industry. Let's build something amazing together!
          </p>
        </section>
        <section>
          <h2 className="section-heading">Tech Stack</h2>
          <ul id="tech-stack">
            <li>Vue JS</li>
            <li>React JS</li>
            <li>Svelte</li>
            <li>Node JS</li>
            <li>Ruby</li>
            <li>Go</li>
            <li>Postgres</li>
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
          <p>Coming Soon</p>
        </section>
      </section>
    </main>
  );
};

export default Home;
