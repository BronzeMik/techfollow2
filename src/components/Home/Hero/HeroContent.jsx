import { Link } from "react-router-dom";

export default function HeroContent() {
    return(
        <div className="hero-container">
            <div className="hero-main">
                <h1>Techie Follows</h1>
                <p> From the latest in artificial intelligence to cutting-edge advancements in cybersecurity, join us on a journey that transcends the ordinary and explores the extraordinary. </p>
                <Link as={Link} to={'/latestblogs'} style={{margin: 20}}><button>Read the Latest Blogs</button></Link>
                <Link as={Link} to={'/createblog'} style={{margin: 20}}><button>Write Your First Blog</button></Link>
            </div>
        </div>
    )
}
