
export default function TagButton({name}) {
    return(
        <div className='tag-btn'>
            <a href={`/tag/${name}`}>{name}</a>
        </div>
    )
}
