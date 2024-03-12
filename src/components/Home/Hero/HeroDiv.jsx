
export default function HeroDiv() {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', width: '100vw'}}>
            
        <div className='hero-div-container'>
                <p className='what-we-do-hero' id='what-we-do-hero'>WHAT WE DO</p>
                <h2>Learn about technology, help others solve problems, and make informed buying decisions</h2>
                
                <div className='hero-subscribe-container'>
                    <div>
                        <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                        <input type="text" placeholder="email"/>
                        <a href='/latestblogs'><button>Subscribe</button></a>
                    </div>
                    

                    <div>
                        <p className='hero-subscriber-num'>125,000</p>
                        <p className='hero-subscriber-count'>Join Our List of Subscribers</p>
                    </div>
                </div>
                
            </div>
        </div>
            
        </>
    )
}
