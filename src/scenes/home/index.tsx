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
  return  <section id="home" 
  className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* image and main header */}
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            {/* Main header */}
            <div className='z-10 mt-32  md:basis-3/5'>
                {/* Headings */}
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:z-[-1] before:-left-20  md:before:content-evolvetext'>
                             <img alt="Home-page-text" src={HomePageText}/>
                        </div>
                    </div>
                    <p className='mt-8 text-sm'> Unrived Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shape that you dream of... Get your Dream body now.
                    </p>
                </div>
                {/* Actions buttons */}
                <div className='mt-8 flex items-center gap-8'>
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
        <div className='flex basic-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 md:justify- items-end'>
            <img src={HomePageGraphic} alt="Home-page-graphic"/>
        </div>
        </div>
        {/* Sponsors */}
        {isAboveMediaScreens && (
            <div className='h-[150px] w-full bg-primary-100'>
                <div className="w-5/6 mx-auto ">
                    <div className='flex gap-8 items-center justify-between w-3/5'>
                        <img alt="Redbull-sponsor" className='mt-10' src={SponsorRedBull} />
                        <img alt="Forbes-sponsor" className='mt-10' src={SponsorForbes} />
                        <img alt="Fortune-sponsor"  className='mt-10' src={SponsorFortune} />

                    </div>
                </div>
            </div>
        )}
    </section>
  
}

export default Home