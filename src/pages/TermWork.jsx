import React from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store';
import TW from '../components/TW';

const TermWork = () => { 

    const {current_assignment,students, t_sub, batch, utStuds} = useTeacherStore();

    console.log(students);
    
  return (
    <div className='min-h-screen overflow-y-scroll custom-scrollbar'>
    <div className='flex flex-col min-h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col justify-around mt-20 '>

      <h2 className='text-2xl font-semibold text-primary text-center'>{t_sub}</h2>
      <h4 className='font-medium text-secondary mt-4 text-center'>{batch}</h4>
      </div>
      <div className='flex flex-col items-center mt-6 overflow-y-scroll custom-scrollbar h-[75vh]'>
        
        {
            students.map((ele) => (
                <TW ele={ele}/>
            ))
        }
    </div>
        

    </div>
  </div>
  )
}

export default TermWork