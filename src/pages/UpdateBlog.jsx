import { Form } from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState, useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateBlog() {
    const {id} = useParams();
    const titleRef = useRef(null);
    const descriptionRef = useRef(null)
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false);
    const log = async(e) => {
        try {
            const content = editorRef.current.getContent();
            const title = titleRef.current.value;
            const description = descriptionRef.current.value;
            const newDate = new Date().toString().slice(0, 15)
            e.preventDefault();
            const {data, error} = await supabase
            .from('user_blogs')
            .update({created_at: newDate, title: title, description: description, content: content})
            .eq('id', id)
            .select()
            if(data) {
                console.log(data)
                navigate('/myblogs')
            }
            if(error) {
                console.log(error)
            } 
        } catch(error) {
            console.log(error)
        }
        
        
   };

   useEffect(() => {
    const loadPost = async() => {
        setLoading(true);
        const {data, error} = await supabase
        .from('user_blogs')
        .select()
        .eq('id', id)

        if(data) {
            setPost(data)
        } else {
            console.log(error)
        }

        setLoading(false)
    }

    loadPost();
   }, [])
    return(
        <> {post.map((post) => 
        <div className='blogs-container' key={post.id}>
        <h1 style={{marginTop: '50px'}}>Edit Blog</h1>
        <Form onSubmit={log}>
            <Form.Group controlId="title">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Title</b> <i>(required)</i>
                </Form.Label>
                <Form.Control type='text' ref={titleRef} defaultValue={post.title} onChange={event => event.target.value}/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Description</b> <i>(required)</i>
                </Form.Label>
                <Form.Control type='text' ref={descriptionRef} defaultValue={post.description}/>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Content</b> <i>(required)</i>
                </Form.Label>
                <Editor
      apiKey='nrmm1vws4fbzj7ypoxzqz8lcs7xpvr2lo4c5nuc3nocuw4bn'
      onInit= {(evt, editor) => editorRef.current = editor}
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'undo redo | blocks fontsize | bold italic underline strikethrough | link | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue={post.content}
    />
            </Form.Group>
            <div className="text-center mt-2">
              <button disabled={loading} type="submit" className="create-blog-cta" style={{marginBottom: '100px'}}>
                Publish
              </button>
            </div>
        </Form>
        </div>
        )}
    </>
    )
}
