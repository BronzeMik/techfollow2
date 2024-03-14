/* eslint-disable no-unused-vars */
import { supabase } from "../supabase/client";
import { useState, useEffect } from "react";
import BlogListHome from "../components/Home/BlogList/BlogListHome";
import EmailSubscribe from "../components/EmailSubscribe";

export default function FeaturedBlogs() {
    const [loading, setLoading] = useState(false); 
    const [posts, setPosts] = useState([]); 
  
    useEffect(() => { 
        const loadPost = async () => { 
            // Till the data is fetch using API 
            // the Loading page will show. 
            setLoading(true); 
  
            // Await make wait until that 
            // promise settles and return its result 
            const { data, error } = await supabase
                .from('user_blogs')
                .select()
  
            // After fetching data stored it in posts state. 
            if(data) {
                setPosts(data);
            }
             
            // Closed the loading page 
            setLoading(false); 
        }; 
  
        // Call the function 
        loadPost(); 
    }, []); 
    console.log(posts)
    

    
    return(
        <>
            <div className='blogs-container'>
                <div className='featured-hero-div-container'>
                    <h2>Featured Blogs</h2>
                </div>
                
            <div className='second-featured-grid-container'>
                <div className='second-featured-grid-2'>
                <BlogListHome 
                num={15}
                />
                </div>
                
            </div>

            <div className='featured-subscribe'>
                <EmailSubscribe />

            </div>
            </div>
        </>
    )
}
