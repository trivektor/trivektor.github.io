import Head from "next/head";
import Home from "../components/home";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Tri Vuong, JS developer</title>
      </Head>
      <Home />
    </div>
  );
}
