import Hero from "../components/Hero/Hero";
import TrendingTopics from "../components/TrendingTopics";

const Home = () => {

  return(
    <>
      <Hero />
      <div className="trending">
        <TrendingTopics />
      </div>
      <div className='home-grid'>
        <div className="list-blogs"></div>
        <div className="list-tags"></div>
      </div>
    </>
    
  )
};

export default Home;
