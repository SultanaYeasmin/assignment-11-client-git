
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';
const Slide = ({ image, text, title }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[400px] md:h-[520px]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
                <div className='text-center'>
                    {/* <TypeAnimation
                        sequence={[
                           
                            `${text}`,
                            1000,
                            "", // Clear the text
                            500,
                        ]}
                        speed={60}
                        className='text-base md:text-lg lg:text-3xl  font-extrabold text-white drop-shadow-lg px-10'
                        repeat={Infinity}
                    /> */}
                      <Fade triggerOnce>
                    <h1 className='text-base md:text-lg lg:text-3xl  font-extrabold text-white drop-shadow-lg px-10'>{text}</h1>
                    </Fade>
                  
                        <p className='text-xs text-white lg:text-sm mt-5 drop-shadow-md px-5 break-words'>{title}</p> 
                    <br />
                    <Link
                        to='/addQueries'
                        className='btn drop-shadow-md btn-wide text-white hover:bg-cyan-600 bg-blue-500 transition-all duration-300'
                    >
                        Add Query & Get Solutions!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
