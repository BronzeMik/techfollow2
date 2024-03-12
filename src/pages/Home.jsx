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
      <div className="list-tags">
          <div className='tags-container'>
            <h2>Find Blogs by Topics</h2>
            <TagsContainer />
          </div>
          
        </div>
      <div className='home-grid'>
          <BlogListHome 
          num={6}
          />        
      </div>
      <div className='second-home-grid-container'>
        <h2>Featured Blogs</h2>
        <div className='second-home-grid'>
          <BlogListHome 
          num={3}
          />
        </div>
        
      </div>
    </>
    
  )
};

export default Home;
