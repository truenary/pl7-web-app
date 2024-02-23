import DownloadLink from "../components/DownloadLink";
import Banner from "../components/home/Banner";
import Earn_With_us from "../components/home/Earn_With_us";
import Hero from "../components/home/Hero";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
    
    <Helmet>
      <title>Home | Dhoka</title>
       <meta name="description" content="Book autos hassle-free with Dhoka - your platform for all auto services." />
    <meta name="keywords" content="auto booking, tuktuk booking, auto services, online booking, Dhoka" />
    <meta name="author" content="Puja ji" />
    <meta name="robots" content="index, follow" />
        
      </Helmet>
     
      <Hero />
      <Earn_With_us />
      <Banner />
      <DownloadLink />

    </>
  );
}

export default Home;
