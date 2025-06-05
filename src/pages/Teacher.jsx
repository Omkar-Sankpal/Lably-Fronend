import React from 'react'
import BatchCard from '../components/BatchCard'
import Lottie from 'lottie-react';
import animationData from '../assets/DMSL_MINI_ANIM1.json'


const Teacher = ({t_name, t_sub, batches}) => {
  
  // console.log(batches);
  

  return (
    <div>
      <div className='flex flex-col '>
        <div className='flex flex-col justify-around mt-20'>

        <h2 className='text-2xl font-semibold text-primary text-center'>{t_name}</h2>
        <h4 className='font-medium text-secondary mt-4 text-center'>{t_sub}</h4>
        </div>

        <div className='mt-4 flex flex-col lg:flex-row flex-wrap justify-center items-center'>
          {
            batches.map((ele) => (
              <>
               <BatchCard subject={t_sub} batch={ele}/>
              </>
            ))
          }
         
        </div>

        <div className='flex justify-center items-center text-center mt-20 mb-10'>
        <Lottie animationData={animationData} loop={true} className='w-48' />
        </div>
      </div>
    </div>
  )
}

export default Teacher