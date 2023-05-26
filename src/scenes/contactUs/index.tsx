import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from '@/shared/HText';

type Props = {
    setSelectedPage:(value: SelectedPage)=> void;
}


const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-5 placeholder-white`
  const { 
    register, 
    trigger, 
    formState: {errors}
  } = useForm()

  
const onSubmit = async(e: any) => {
  const isValid = await trigger()
  if (!isValid){
    e.preventDefault()
  }
}


  return (
    <section id='contactus'  className='mx-auto w-5/6 pt-24 pb-32 '>
        <motion.div
          onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
        >
          {/* Header */}
          <motion.div
            className='md:w-3/5'
            initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible:{opacity:1, x:0},
                    }}
          >
            <HText><span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE.</HText>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto cum facilis quam beatae repellat minima ipsum quasi. Cumque placeat aspernatur, nostrum eos autem repudiandae.</p>
          </motion.div>

          {/*  Form and image */}
          <div className='mt-10 justify-between gap-8 md:flex '>
            <motion.div 
              className=" basis-3/5  md:mt-0"
              initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden: {opacity:0, y:50},
                        visible:{opacity:1, y:0},
                    }}
              >
                <form
                  target="_blank"
                  onSubmit={onSubmit}
                  method='POST'
                  action="https://formsubmit.co/muhammadshaharyar642@gmail.com"
                >
                    <input 
                      className={inputStyles}
                      type="name"
                      placeholder='NAME'
                      {...register("name", {
                        required:true,
                        maxLength:100,
                      })}
                    />
                    {errors.name && (
                      <p className='mt-1 text-primary-500'>  
                          {errors.name.type === 'required' && "This field is required."}
                          {errors.name.type === "maxLength" && "Max length is 100 char."}
                      </p>
                    )}

                    <input 
                      className={inputStyles}
                      type="email"
                      placeholder='EMAIL'
                      {...register("email", {
                        required:true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2, }$/i,
                      })}
                    />
                    {errors.name && (
                      <p className='mt-1 text-primary-500'>  
                          {errors.name.type === 'required' && "This field is required."}
                          {errors.name.type === "pattern" && "Invalid Email. "}
                      </p>
                    )}    
                     <textarea 
                      className={inputStyles}
                      rows={4}
                      cols={50}
                      placeholder='MESSAGE'
                      {...register("message", {
                        required:true,
                        maxLength:2000,
                      })}
                    />
                    {errors.message && (
                      <p className='mt-1 text-primary-500'>  
                          {errors.message.type === 'required' && "This field is required."}
                          {errors.message.type === "maxLength" && "Max length is 2000 char."}
                      </p>
                    )}
                    <button
                      type='submit'
                      className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'

                    >
                        SUBMIT
                    </button>
                </form>
                
            </motion.div>
            <motion.div
              className='relative mt-16 basis-2/5 md:mt-0'
              initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden: {opacity:0, y:50},
                        visible:{opacity:1, y:0},
                    }}        
            >
                <div className='md:before:content-evolvetext md:before:z-[-1] w-full before:absolute before:-bottom-20 before:-right-10'>
                  <img
                    className='w-full'
                    alt="contact us graphic"
                    src={ContactUsPageGraphic}
                  />
                </div>
            </motion.div>
          </div>
        </motion.div>
    </section>
  )
}

export default ContactUs