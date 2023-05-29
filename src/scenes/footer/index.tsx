import Logo from "@/assets/Logo.png"
type Props = {}

const Footer = (props: Props) => {
  return (
    // <div className="w-full bg-primary-300 p-5 md:flex mx-auto">
    //   {/* fIRST */}
    //   <div className="mt-5 md:mt-0">
    //     <img src={Logo} />
    //     <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dignissimos quidem aspernatur iusto facilis consectetur aut temporibus corrupti cupiditate architecto.</p>
    //     <p className="mt-5">@ Evogym All Rights Reserved.</p>
    //   </div>
    //   {/* sECOND */}
    //   <div className=" md:w-1/3 mt-5 md:mt-0">
    //     <p className="font-bold ">Links</p>
    //     <p>Lorem ipsum dolor</p>
    //     <p>Lorem ipsum dolor sit</p>
    //     <p>Lorem, ipsum</p>
    //   </div>
    //   {/* tHIRD */}
    // <div className=" md:w-1/3 mt-5 md:mt-0">
    //   <p className="font-bold">Contact Us</p>
    //   <p>Lorem ipsum dolor sit amet consectetur.</p>
    //   <p>(345)870-6114</p>

    // </div>

    // </div>
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">

          <img alt="logo" src={Logo}/>
          <p className="my-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aspernatur porro cumque doloremque architecto quo ipsum consequuntur. Nobis, recusandae laboriosam.</p>
          <p>(c) Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">Lorem ipsum</p>
          <p className="mt-5">Lorem ipsum dolor</p>
          <p className="mt-5">Lorem</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="mt-5">(345)987-2367</p>
          
        </div>
      </div>
      
    </footer>
  )
}

export default Footer