import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";
import BlogListCard from './BlogListCard'



export default function BlogListHome() {
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
                    {posts && posts.map((post) =>
                    <BlogListCard
                    key={post.id}
                    author={post.author_name}
                    title={post.title}
                    date={post.created_at}
                    img = {`https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url}`}
                    url = {`/blog/${post.id}`}
                    />
                    )}
        </>
    )
}
