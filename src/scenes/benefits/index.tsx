import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"

import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

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
            <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and class to 
                    get you to your ultimate fitness goals with ease. We provide true care into 
                    each and every member.
                </p>
            </div>
            {/* Benefits */}
            <div className="md:flex gap-8 justify-between items-center mt-5">
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit/>
                ))}
            </div>
        </motion.div>
  </section>
}

export default Benefits