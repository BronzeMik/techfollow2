import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import BlogListCard from "../components/Home/BlogList/BlogListCard";


export default function BlogByTag() {
    const {tag} = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        setLoading(true);
        const getBlogs = async() => {
            const {data, error} = await supabase
            .from('user_blogs')
            .select()
            .contains('tags', [`${tag}`])
            
            if(data) {
                setPosts(data)
                
                
            } else {
                console.log(error)
            }
            setLoading(false);
        }

        getBlogs();
        
        
    }, [tag]);
    return(
        <>
        
        <div className='tag-page-container' style={{textAlign: 'center'}}>
            <h1 style={{marginTop: '60px'}}>{tag.toUpperCase()}</h1>
            {loading && <p>Loading posts</p>}
            <div className='grid-2-col'>
                
                {posts && posts.map((post) => 
                    <div key={post.id}>
                        <BlogListCard
                        className='tag-card'
                        author={post.author_name}
                        title={post.title}
                        description={post.description}
                        date={post.created_at}
                        img={`https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url}`}
                        url={`/blog/${post.id}`}
                        />
                    </div>
                )}
            </div>
        </div>
            
        </>
    )
}
