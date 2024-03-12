import HeroContent from "./HeroContent"
import HeroDiv from "./HeroDiv"
export default function Hero() {
    return(
        <>
            <HeroDiv />
            <div className='hero-div' style={{textAlign:'center', padding: '50px'}}>
                    
                    <HeroContent />
                
            </div>
        </>
    )
}
