import BlogListHome from "../components/Home/BlogList/BlogListHome";
import Hero from "../components/Home/Hero/Hero";
import TagsContainer from "../components/Home/TagsContainer";
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
          <div className='tags-container'>
            <h2>Find Blogs by Topics</h2>
            <TagsContainer />
          </div>
          
        </div>
      </div>
    </>
    
  )
};

export default Home;
