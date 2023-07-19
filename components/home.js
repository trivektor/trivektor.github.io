import profilePic from "./picofme.png";

const Home = () => {
  return (
    <>
      <main id="main">
        <div>
          <h1
            style={{
              textAlign: "center",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: 50,
              fontStyle: "oblique",
            }}
          >
            Meet Tri!
          </h1>

          <img
            src={profilePic.src}
            height={200}
            style={{ display: "block", margin: "0 auto" }}
          />
          <nav id="navbar">
            <a
              href="https://docs.google.com/document/d/1ludtuLBCF1Too4wHOXu6xN5O5L_aej_L1foKm_cOwbo/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            /<a href="mailto:trivektor@gmail.com">Email</a>/
            <a href="https://github.com/trivektor" target="_blank">
              Github
            </a>
          </nav>

          <p>
            A seasoned JavaScript developer with over 10 years of hands-on
            experience. With a deep understanding of frontend development, Tri
            has honed his skills in both Vue and React frameworks. His expertise
            lies in building interactive and scalable web applications that
            deliver exceptional user experiences. Passionate about creating
            clean and efficient code, Tri constantly stays up-to-date with the
            latest industry trends and best practices. His solid foundation in
            JavaScript, coupled with his mastery of Vue and React, enables him
            to tackle complex challenges and drive innovative solutions. With a
            proven track record of successful projects and a knack for
            problem-solving, he is a valuable asset to any development team.
          </p>
        </div>

        <h2>Tech Stack</h2>
        <div>
          <ul>
            <li>Vue</li>
            <li>React</li>
            <li>Ruby</li>
            <li>Node</li>
            <li>Go</li>
            <li>PostgresSQL</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
