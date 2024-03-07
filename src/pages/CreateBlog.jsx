import { Form } from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";


export default function CreateBlog() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null)
    const editorRef = useRef(null);
    const authorRef = useRef(null);
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(false);
    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const log = async(e) => {
        e.preventDefault();
        try {
            setLoading(true)
                if (editorRef.current) {
                    const content = editorRef.current.getContent();
                    const title = titleRef.current.value;
                    const description = descriptionRef.current.value;
                    const authorName = authorRef.current.value;
                    const newDate = new Date().toString().slice(0, 15);
                    const image_slug = Math.floor(Math.random() * 100000000)
                    const { data: { user } } = await supabase.auth.getUser()
                    console.log(user.id)
                    if(user && selectedFile != null) {
                        const { data, error } = await supabase
                                .storage
                                .from('blog_images')
                                .upload(user.id + "/" + image_slug, selectedFile)
                                if(data) {
                                    // navigate('/myblogs')
                                    const { error } = await supabase
                                        .from('user_blogs')
                                        .insert({created_at: newDate, title: title, description: description, content: content, user_uuid: user.id, author_name: authorName, image: true, image_url: image_slug })
                                        if(error && error.message == 'duplicate key value violates unique constraint "user_blogs_title_key') {
                                            alert('You already have a blog with this title, please rename your blog')
                                        } else {
                                            navigate('/myblogs')
                                        }
                                } else if(error.statusCode == '422') {
                                    alert('Invalid image type, please upload jpg, jpeg, or png file')
                                }
                        
                    } else if(selectedFile == null) {
                        const { error } = await supabase
                        .from('user_blogs')
                        .insert({created_at: newDate, title: title, description: description, content: content, user_uuid: user.id, author_name: authorName, image: false });
                        if(error) {
                            console.log(error)
                        } else {
                            // eslint-disable-next-line no-unused-vars
                                    navigate('/myblogs')
                                } 
                    }
                    }
                } catch(err) {
                    console.log(err)
            
                } 
        
        setLoading(false)
        
   };
    return(
        <>
        <div className='blogs-container'>
        <h1 style={{marginTop: '50px'}}>Create a Blog</h1>
        <Form onSubmit={log}>
            <Form.Group controlId="authorName">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Author Name</b> <i>(required)</i>
                </Form.Label>
                <Form.Control type='text' ref={authorRef} required/>
            </Form.Group>
            <Form.Group controlId="title">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Title</b> <i>(required)</i>
                </Form.Label>
                <Form.Control type='text' ref={titleRef} required/>
            </Form.Group>
            <Form.Group controlId="image">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Image</b> <i>(optional)</i>
                </Form.Label>
                <Form.Control type='file' size='lg' onChange={onFileChange}/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label style={{marginTop: '30px'}}>
                    <b>Description</b> <i>(required)</i>
                </Form.Label>
                <Form.Control type='text' ref={descriptionRef} required/>
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
      initialValue="Write your blog content here"
    />
            </Form.Group>
            <div className="text-center mt-2">
              <button disabled={loading} type="submit" className="create-blog-cta" style={{marginBottom: '100px'}}>
                Create a Blog
              </button>
            </div>
        </Form>
        </div>
    </>
    )
}
