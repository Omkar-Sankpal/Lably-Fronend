import React from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store'
import StudentDetails from '../components/StudentDetails';

const SelectedA = () => {

    const {current_assignment, selected_ass_students} = useTeacherStore();

    // console.log("elected sude",selected_ass_students);
    

  return (
    <div className='min-h-screen overflow-y-scroll custom-scrollbar'>
    <div className='flex flex-col min-h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col justify-around mt-20 '>

      <h2 className='text-2xl font-semibold text-primary text-center'>{current_assignment.a_id}</h2>
      <h4 className='font-medium text-secondary mt-4 text-center'>{current_assignment.title}</h4>
      </div>
      <div className='flex flex-col justify-center items-center mt-6'>
        
        {
            selected_ass_students.map((ele) => (
                <StudentDetails ele={ele}/>
            ))
        }
    </div>
        

    </div>
  </div>
  )
}

export default SelectedA