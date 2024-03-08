

export default function BlogListCard({author, title, description, date, img, url}) {
    return(
        <>
            <div className='blog-list-home'>
                <div style={{paddingLeft: '50px', lineHeight: '2em', alignSelf: 'end'}}>
                    <p><i>Written By: {author}</i></p>
                    <h4><b>{title}</b></h4>
                    <p>{description}</p>
                    <p>Last Updated: {date}</p>
                    <a href={url}>Read More</a>
                </div>
                <div>
                    <img src={img} alt='' style={{width: '100%'}}/>
                </div>

            </div>
        </>
    )
}
