
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
const Slide = ({ image, text, title}) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[400px] md:h-[500px]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
        <div className='text-center'>
         <Fade triggerOnce>
         <h1 className='text-lg font-extrabold text-white lg:text-5xl drop-shadow-lg px-10'>
            {text}
          </h1>
         </Fade>
        
          <p className='text-xs text-white lg:text-base mt-3 drop-shadow-md px-5'>{title}</p>
          <br />
          <Link
            to='/addQueries'
            className='btn drop-shadow-md btn-wide text-white hover:bg-blue-600 bg-blue-500 transition-all duration-300'
          >
            Add Query & Get Solutions!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
