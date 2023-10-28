import { AiOutlineSchedule, AiOutlinePhone,  } from 'react-icons/ai';
import { IoLocationOutline  } from 'react-icons/io5';

const Contact = () => {
    return (
        <div>

            <section className="bg-[#151515] p-20 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-xl">

                <div className='text-white flex items-center gap-4'>
                   <div>
                    <a><AiOutlineSchedule className='text-4xl'></AiOutlineSchedule></a>
                   </div>
                   <div>
                    <h4>We are open monday-friday</h4>
                    <p className='font-bold text-2xl'>7:00 am - 9:00 pm</p>
                   </div>
                </div>


                <div className='text-white flex items-center gap-4'>
                   <div>
                    <a><AiOutlinePhone className='text-4xl'></AiOutlinePhone></a>
                   </div>
                   <div>
                    <h4>Have a question?</h4>
                    <p className='font-bold text-2xl'>+2546 251 2658</p>
                   </div>
                </div>

                <div className='text-white flex items-center gap-4'>
                   <div>
                    <a><IoLocationOutline className='text-4xl'></IoLocationOutline></a>
                   </div>
                   <div>
                    <h4>Need a repair? our address</h4>
                    <p className='font-bold text-2xl'>Liza Street, New York</p>
                   </div>
                </div>

            </section>
            
        </div>
    );
};

export default Contact;