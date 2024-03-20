/* eslint-disable no-unused-vars */
import { supabase } from "../supabase/client";
import { useState, useEffect } from "react";
import BlogCard from "../components/Blog/BlogCard";
import { useAuth } from "../context/AuthProvider";



export default function MyBlogs() {
    const [loading, setLoading] = useState(false); 
    const [posts, setPosts] = useState([]); 
    const { user } = useAuth();
    const [media, setMedia] = useState([]);
    
    
  
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
                .eq('user_uuid', user.id)
  
            // After fetching data stored it in posts state. 
            if(data) {
                setPosts(data);
            }
             
            // Closed the loading page 
            setLoading(false); 
        }; 
  
        // Call the function 
        loadPost(); 
    }, [user]); 
    console.log(posts)
    

    
    return(
        <>
            <div className='blogs-container'>
            <h1>My Blogs</h1>
            {loading && <h4>Loading posts...</h4> }
            {posts.length > 0 ? (posts.map((post) => 
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
        ) : <div style={{textAlign: 'center'}}>
            <h3 style={{margin: '50px 0px'}}><i>You do not have any posts</i></h3>
            <a href='/createblog'><button className='blog-cta'>CREATE YOUR FIRST POST</button></a>
            </div>}
        </div>
        
        </>
    )
}
