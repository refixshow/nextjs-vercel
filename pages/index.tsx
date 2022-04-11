import { useEffect } from "react";
import { getLandingPage } from "./lib/strapi";

const Home = () => {
  useEffect(() => {}, []);

  return <div className="bg-black text-purple-300">hue ha</div>;
};

export async function getStaticProps() {
  const cms = await getLandingPage();

  return {
    props: { cms },
    revalidate: 60 * 60 * 24 * 7,
  };
}

export default Home;
