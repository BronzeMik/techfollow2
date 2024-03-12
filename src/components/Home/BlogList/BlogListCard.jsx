

export default function BlogListCard({author, title, description, date, img, url}) {
    return(
        <>
            <div className='blog-list-home'>
                <div style={{backgroundImage: `url(${img})`, width: '100%',height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'}}>
                        <img src='#' alt='' />
                </div>
                <div style={{paddingLeft: '50px', lineHeight: '2em', alignSelf: 'end'}}>
                    <p><i>Written By: {author}</i></p>
                    <h4><b>{title}</b></h4>
                    <p>{description}</p>
                    <p>Last Updated: {date}</p>
                    <a href={url}>Read More</a>
                </div>
            </div>
        </>
    )
}
