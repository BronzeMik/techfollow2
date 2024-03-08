/* eslint-disable react/prop-types */


export default function TrendingPostCard({ author, title, date, url}) {
    return (
        <>
            <div>
                <p><b>Written By: {author}</b></p>
                <h4>{title}</h4>
                <p className='text-small'>Last updated: {date}</p>
                <a href={url}>Read More</a>
            </div>
        </>
    )
}
