import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";
import { Navigate, useNavigate } from "react-router-dom";

export default function HeroContent() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
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
        <div className="hero-container">
            {/* <div className="hero-main">
                <h1>Techie Follows</h1>
                <p> From the latest in artificial intelligence to cutting-edge advancements in cybersecurity, join us on a journey that transcends the ordinary and explores the extraordinary. </p>
                <Link as={Link} to={'/latestblogs'} style={{margin: 20}}><button>Read the Latest Blogs</button></Link>
                <Link as={Link} to={'/createblog'} style={{margin: 20}}><button>Write Your First Blog</button></Link>
            </div> */}
            <div className='grid-2-3'>
                {posts && posts.map((post, index) => {
                    if (index == 0) {
                        return <div className='hero-col-1' key={post.id}
                        style={{backgroundImage: `url(https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url})`, width: '100%',height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer'}} onClick={() => navigate(`/blog/${post.id}`)}>
                        {post.tags && <p className='hero-tag' style={{fontSize: '14px', padding: '10px 10px'}}>{post.tags[0]}</p>}
                        <h2>{post.title}</h2>
                        <p>{post.created_at}</p>
                    </div>
                    }
                    
                
                })}
                <div className='hero-col-2'>
                {loading && <p>Loading</p>}
                {posts && posts.map((post, index) => {
                   if (index > 0 && index < 4 ) {
                    return <div className='hero-col-2-child' key={post.id} onClick={() => navigate(`/blog/${post.id}`)} style={{cursor: 'pointer'}}>
                        
                        <div style={{backgroundImage: `url(https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url})`, width: '100%',height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'}} className='hero-col-2-grandchild-img'>
                            <img src={``} alt='' />
                        </div>
                        <div className='hero-col-2-grandchild'>
                            {post.tags && <p className='hero-tag' style={{fontSize: '14px', padding: '10px 10px'}}>{post.tags[0]}</p>}
                            <h2 style={{fontSize: '1.5em'}}>{post.title}</h2>
                            <p>{post.created_at}</p>
                        </div>
                        
                        </div>
                    
                   }
                    
                
                })}
                </div>
                
            </div>
        </div>
    )
}
