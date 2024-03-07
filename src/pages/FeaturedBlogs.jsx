/* eslint-disable no-unused-vars */
import { supabase } from "../supabase/client";
import { useState, useEffect } from "react";
import BlogCard from "../components/Blog/BlogCard";

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
            <h1 style={{marginTop: '50px'}}>Featured Blogs</h1>
            <p>Explore blogs covering trending topics</p>
            {loading ? (
                <h4>Loading posts...</h4>
            ) : (
                posts.map((post) => 
            <BlogCard 
            key={post.id}
            author={post.author_name}
            date={post.created_at}
            title={post.title}
            description={post.description}
            image={post.image && `https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url}`}
            url = {`/blog/${post.id}`}
            />
            )
        )}
        </div>
        </>
    )
}
