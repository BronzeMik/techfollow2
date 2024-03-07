import { Card, } from "react-bootstrap"


const BlogCard = ({author, title, date, image, description, url}) => {
    return(
        <>
        
        <Card className='blog-card'>
            <Card.Header>
               Written By: {author ? <span>{author}</span> : <span>TechieFollow</span>}
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {
                    image ? <Card.Img className='blog-card-img' src={image} /> : <br />
                }
                <Card.Text>{description}</Card.Text>
                <Card.Link href={url}><button className='blog-cta'>Read Blog</button></Card.Link>
            </Card.Body>
            <Card.Footer>
                {date}
            </Card.Footer>
            
        </Card>
        </>
    )
}

export default BlogCard
