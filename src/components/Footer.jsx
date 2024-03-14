

export default function Footer() {
    return(

        <>
            <footer className="footer">
                <div className="container grid grid-3">
                    <div>
                        <h1>TechieFollow</h1>
                        <p>&copy; Copyright 2024</p>
                    </div>
                    <div className='ul'>

                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/featuredblogs">Featured Blogs</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </nav>

                    </div>
                    
                    <div className='social-container'>
                        <p>Connect With Us!</p>
                        <div className="social">
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>
                    
                </div>
        </footer>
        </>
    )
}
