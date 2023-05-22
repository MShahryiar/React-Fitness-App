import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"

import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-5 w-6"/>,
        title:"State of the art facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon:<UserGroupIcon className="h-5 w-6"/>,
        title:"100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon:<AcademicCapIcon className="h-5 w-6"/>,
        title:"Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

]

const container = {
    hidden : {},
    visible:{
        transition: {staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage:(value: SelectedPage)=> void;
}

function Benefits({ setSelectedPage}: Props) {
  return <section 
        id="benefits"
        className="mx-auto  min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible:{opacity:1, x:0},
                    }}
                >
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and class to 
                    get you to your ultimate fitness goals with ease. We provide true care into 
                    each and every member.
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
                className="md:flex gap-8 justify-between items-center mt-5"
                initial="hidden"
                whileInView="visible"
                viewport = {{once:true, amount:0.5}}
                variants={container}
                >
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphics and description */}
            <div className="md:flex mt-16 justify-between gap-20 md:mt-28 items-center">
                {/* Graphic */}
                <img
                    className="mx-auto"
                    alt="benefits-page-graphics"
                    src={BenefitPageGraphic}
                />
                {/* Description */}
                <div className="md:basis-3/5">
                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute before:z-[1] before:content-abstractwaves before:-top-20 before:-left-20">
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:true, amount:0.5}}
                                transition={{duration:0.5}}
                                variants={{
                                    hidden: {opacity:0, x:50},
                                    visible:{opacity:1, x:0},
                                }}
                            >
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>.</HText>

                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible:{opacity:1, x:0},
                        }}
                    >
                        <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Quis commodo odio aenean sed adipiscing diam donec. Faucibus interdum posuere lorem ipsum dolor.</p>
                        <p className="mb-5">Placerat orci nulla pellentesque dignissim enim sit amet. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Dictumst quisque sagittis purus sit. Pellentesque dignissim enim sit amet venenatis urna cursus eget</p>
                    </motion.div>
                    {/* Button   */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:z-[-1] before:right-40 before:-bottom-20 before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage} >Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

  </section>
}

export default Benefits