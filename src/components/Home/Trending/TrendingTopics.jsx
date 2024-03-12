import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";
import TrendingPostCard from "./TrendingPostCard";


export default function TrendingTopics() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const getBlogs = async() => {
            const {data, error} = await supabase
            .from('user_blogs')
            .select()
            
            if(data) {
                setPosts(data)
                
                
            } else {
                console.log(error)
            }
            setLoading(false);
        }

        getBlogs();
        
    }, []);

    return(
        <>
            {loading && <p>Loading Trending Posts</p>}
                <div className="grid">
                    {posts && posts.map((post, index) =>
                    index < 4 &&
                    <div className='grid-item' key={post.id}> 
                    <div className='index-flex' style={{color: '#848484'}}>0{index + 1}</div>
                    <TrendingPostCard
                    author={post.author_name}
                    title={post.title}
                    date={post.created_at}
                    url = {`/blog/${post.id}`}
                    />
                    </div>
                    )}
            </div>
        </>
    )
}
