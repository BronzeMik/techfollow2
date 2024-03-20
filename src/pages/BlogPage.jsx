import {  useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import DOMPurify from "dompurify";
import { Card } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";

const BlogPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState([])
    const [allPosts, setallPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [isUser, setIsUser] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const loadPost = async() => {
            setLoading(true)
            // eslint-disable-next-line no-unused-vars
            
            const { data, error } = await supabase
                .from('user_blogs')
                .select()
                .eq('id', id)
            //Check is user is author of blog
            if(user) {
                if(user.id == data[0].user_uuid) {
                    setIsUser(true)
                }
            }
            
                
  
            // After fetching data stored it in posts state. 
            if(data) {
                setPost(data);
                
            } 
            
            if(error) {
                console.log(error)
            }
            setLoading(false)
        }

        const loadAll = async() => {
            const{data, error} = await supabase
            .from('user_blogs')
            .select()
            .neq('id', id)
            .range(0, 3)

            if(data) {
                setallPosts(data)
            } 
            if(error) {
                console.log(error)
            }
        }

        loadPost();
        loadAll();
        
    }, [user, id])
  
    const deleteBlog = async(e) => {
        e.preventDefault();

        let currId = 0
        post.map((post) => currId = post.id);
        const { error } = await supabase.from('user_blogs').delete().eq('id', currId);
        if(error) {
            console.log(error)
        } else(
            navigate('/myblogs')
        )
    }
    
    return (
        <>
       
        
        <div className='blog-post-grid'>
        {loading && <h2>Loading Blog</h2>}
        <div className='update-delete'>
                {isUser && <a href={`/updateblog/${id}`} ><button className='blog-cta'>Edit Blog</button></a>}
                {isUser && <a href='#popup1'><button className='blog-cta'>Delete Blog</button></a>}
                
        </div>
        <div className='main-blog-content'>
        
        {
            post && post.map((post) =>
            <div className='blog-post-container' key={post.id}>
            <h1><b>{post.title}</b></h1>
            <h5><i>Written by: { post.author_name ? post.author_name : 'TechieFollow' }</i></h5>
            <h6><i>{post.created_at}</i></h6>
            {post.image && <img src={`https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url}`} style={{width: '90%', margin: '30px 0px'}} />}
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}}></div>
            </div>
            )
        
        }
        </div>
        <div className='side-bar-content'>
            <h1>Related Posts</h1>
            {
                allPosts.map((post) => 
                     <Card className='blog-card' key={post.id}>
                        <Card.Header>
                        Written By: {post.author_name ? <span>{post.author_name}</span> : <span>TechieFollow</span>}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            {
                                post.image ? <Card.Img className='blog-card-img' src={`https://tdfuqxopvbwbxxvlgsvu.supabase.co/storage/v1/object/public/blog_images/${post.user_uuid}/${post.image_url}`}  style={{width: '90%'}} /> : <br />
                            }
                            <Card.Text>{post.description}</Card.Text>
                            <Card.Link href={`/blog/${post.id}`}><button className='blog-cta' style={{padding: '10px 50px'}}>Read Blog</button></Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            {post.created_at}
                        </Card.Footer>
            
                    </Card>
                )
            }
        </div>
        </div>
        <div id="popup1" className="overlay">
            <div className="popup">
                <h2>DELETE THIS BLOG</h2>
                <a className="close" href={`/blog/${id}`}>&times;</a>
                <div className="content">
                    <p>Are you sure you want to delete this blog? Once deleted, we will be unable to retreive this blog again.</p>
                    {isUser && <a href={`/updateblog/${id}`} ><button className='blog-cta'>I JUST WANT TO EDIT MY BLOG</button></a>} <br /><br />
                    {isUser && <a href='#' ><button className='blog-cta-delete' onClick={deleteBlog}><b>YES, I WOULD LIKE TO PERMANENTLY DELETE MY BLOG</b></button></a>}
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogPage
