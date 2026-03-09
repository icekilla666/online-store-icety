import Advantages from "@/components/home/Advantages";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Collection from "@/components/home/Collection";
import Curation from "@/components/home/Curation";
import Faq from "@/components/home/Faq";
import Service from "@/components/home/Service";
import { useTitle } from "@/hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner />
      <Advantages />
      <Categories />
      <Collection />
      <Service />
      <Curation />
      <Faq />
    </>
  );
};

export default Home;
