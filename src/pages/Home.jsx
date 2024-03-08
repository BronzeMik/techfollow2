import BlogListHome from "../components/Home/BlogList/BlogListHome";
import Hero from "../components/Home/Hero/Hero";
import TrendingTopics from "../components/Home/Trending/TrendingTopics";


const Home = () => {


  return(
    <>
      <Hero />
      <div className="trending">
        <TrendingTopics />
      </div>
      <div className='home-grid'>
        <div className="list-blogs">
          <BlogListHome />
        </div>
        <div className="list-tags">
          <p>Tags</p>
        </div>
      </div>
    </>
    
  )
};

export default Home;
