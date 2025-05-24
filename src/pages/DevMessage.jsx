import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../assets/DevMessage.json'
import { Link } from 'react-router-dom';


const DevMessage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <div>
            <Lottie animationData={animationData} loop={true} className='max-w-md w-full' />
        </div>
        <div>
            Database only has data for SE11 
            To try out use any roll number from 23301 - 23387 <br/>
            For teacher details id - 101 to 111
            password - pict123 <br/> 
            Enjoyyy!!! 
        </div>
        <Link to={'/'}>
            <button className='btn btn-ghost'>
                Back to home
            </button>
        </Link>
    </div>
  )
}

export default DevMessage