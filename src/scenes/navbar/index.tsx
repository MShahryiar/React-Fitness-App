import { useState} from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"


type Props = {
    selectedPage:SelectedPage;
    setSelectedPage:(value: SelectedPage)=> void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return <nav>
       <div className={`${flexBetween}  fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween}  mx-auto w-5/6`}>
               <div className={`${flexBetween}  w-full  gap-16`}>
                    {/* LEFT  */} 
                    <img alt="Logo" src={Logo}/>
                    {/* Right */}
                    {isAboveMediumScreens ? 
                    (
                        <div className={`${flexBetween}  w-full md:flex hidden `}>
                        <div className={`${flexBetween} gap-8  text-sm`}>
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                
                                />
                            <Link 
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />

                        </div>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>
                    </div>
                    )                                
                    :
                     (
                                            

                        <button className=" bg-secondary-500 rounded-full p-2 " onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white "/>
                        </button>                    
                    )}

               </div>
               
            </div>  
       </div>
  </nav>
}

export default Navbar

{/* <button className=" bg-secondary-500 rounded-full flex md:hidden" onClick={()=>setIsMenuToggled(!isMenuToggled)}> */}
{/* <div className={`${flexBetween}  w-full md:flex hidden `}></div> */}