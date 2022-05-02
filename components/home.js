const Home = () => {
  return (
    <div className="h-screen px-8 py-4 bg-zinc-900 text-white">
      <h1 className="text-2xl mb-4">Hi 👋 My name is Tri Vuong</h1>
      <p>I'm a JS developer based in Ho Chi Minh City 🇻🇳 and Los Angeles 🇺🇲</p>
      <p>You can contact me at trivektor (gmail)</p>
      <h2 className="mt-4 mb-4">Skills</h2>
      <div className="w-1/4">
        <div className="flex">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              alt="Javascript"
            />
          </a>
          <a href="https://www.php.net/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
              alt="PHP"
            />
          </a>
          <a
            href="https://www.ruby-lang.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg"
              alt="Ruby"
            />
          </a>
          <a href="https://go.dev/doc/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg"
              alt="Go"
            />
          </a>
          <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg"
              alt="Svelte"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              alt="React"
            />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
              alt="Vue"
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
              alt="Sass"
            />
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              alt="NodeJS"
            />
          </a>
          <a href="https://graphql.org/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
              alt="GraphQL"
            />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
              alt="PostgreSQL"
            />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
              alt="MySQL"
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              className="w-10"
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              alt="MongoDB"
            />
          </a>
        </div>
      </div>

      <h2 className="mt-4 mb-4">Socials</h2>
      <div className="flex">
        {" "}
        <a
          href="https://www.github.com/trivektor"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
            className="w-6"
          />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/tvuong"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
            className="w-6"
          />
        </a>{" "}
        <a
          href="https://www.twitter.com/trivektor"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg"
            className="w-6"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
