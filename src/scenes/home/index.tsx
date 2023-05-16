import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage:(value: SelectedPage)=> void;
}


function Home({setSelectedPage}: Props) {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)")
  return  <section id="home" className='gap-16 bg-gray-20 md:h-full md:pb-0'>
        {/* image and main header */}
        <div>
            {/* Main header */}
            <div>
                {/* Headings */}
                <div>
                    <div>
                        <div>
                             <img alt="Home-page-text" src={HomePageText}/>
                        </div>
                    </div>
                    <p>Unrived Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shape that you dream of... Get your Dream body now.
                    </p>
                </div>
                {/* Actions buttons */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink 
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
        {/* image */}
        <div>
            <img src={HomePageGraphic} alt="Home-page-graphic"/>
        </div>
        </div>
        {/* Sponsors */}
        {isAboveMediaScreens && (
            <div>
                <div>
                    <div>
                        <img alt="Redbull-sponsor" src={SponsorRedBull} />
                        <img alt="Forbes-sponsor" src={SponsorForbes} />
                        <img alt="Fortune-sponsor" src={SponsorFortune} />

                    </div>
                </div>
            </div>
        )}
    </section>
  
}

export default Home