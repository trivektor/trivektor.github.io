import profilePic from "./picofme.png";

const Home = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>Resume</li>
          <li>Projects</li>
          <li>Tech Stack</li>
          <li>Links</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main id="main">
        <div>
          <img
            src={profilePic.src}
            height={200}
            style={{ float: "left", margin: "0 40px 0 0" }}
          />
          <h1>Meet Tri!</h1>
          <p
            style={{
              lineHeight: 1.8,
            }}
          >
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
