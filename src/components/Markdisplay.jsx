import React from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store'
import { X } from 'lucide-react';

const Markdisplay = ({onClose, subject}) => {

    const {ind_stud} = useTeacherStore(); 

    const Subassi = ind_stud.filter(assignment => assignment.a_id.startsWith(subject)).map(assignment => 
        (
    <div key={assignment.a_id} className='flex justify-center items-center rounded-lg p-2 bg-base-100 mb-2'>
      <div className='text-center p-2 bg-base-300 max-w-sm w-full rounded-md'>
        {assignment.a_id} 
      </div>
      <div className='text-center p-2 bg-base-300 max-w-sm w-full rounded-md'>
        {assignment.marks1 ?? 'N/A'} 
      </div>
      <div className='text-center p-2 bg-base-300 max-w-sm w-full rounded-md'>
        {assignment.marks2 ?? 'N/A'}
      </div>
    </div>
  ));

  return (
    <div className='fixed top-0 left-0 h-screen w-full backdrop-blur-sm flex justify-center items-center z-20'>
        <div className=' relative max-w-lg w-full rounded-lg border-2 border-base-300'>
        <div className=' absolute top-0 right-0 bg-neutral ' onClick={onClose}>
                <X className='text-success hover:text-warning size-5'/>
        </div>
            <div className='overflow-y-scroll h-[500px] custom-scrollbar'>
                {Subassi}
            </div>
            
        </div>
    </div>
  )
}

export default Markdisplay