import Head from "next/head";
import Home from "../components/home";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>
          Tri Vuong | Unlocking the Web's Potential: Your Vision, My Code.
        </title>
        <meta
          name="description"
          content="Tri Vuong web developer's portfolio"
          key="desc"
        />
        <meta
          property="og:title"
          content="Tri Vuong - Web Developer | Unlocking the Web's Potential: Your Vision, My Code"
        />
        <meta
          property="og:description"
          content="Tri Vuong web developer's portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <Home />
    </div>
  );
}
