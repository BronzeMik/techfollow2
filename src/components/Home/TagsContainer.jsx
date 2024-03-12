import TagButton from "../TagButton";


export default function TagsContainer() {
    return(
        <>
            <div className="tags-grid">
                <TagButton name='cybersecurity' />
                <TagButton name='blockchain' />
                <TagButton name='IoT' />
                <TagButton name='5G tech' />
                <TagButton name='AR/VR' />
                <TagButton name='biotechnology' />
            </div>
        </>
    )
}
