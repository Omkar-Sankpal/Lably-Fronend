import React from 'react'
import Assignment from '../components/Assignment'
import { useTeacherStore } from '../store/use.Teacher.Store';
import { useNavigate } from 'react-router-dom';

const Assignments = ({batch, subject}) => {

    const {assignments, getSessions ,getBatch, getUt } = useTeacherStore()
    const nav = useNavigate();
    console.log("assi",assignments);
    
    const handleMark = async() => {

      await getSessions(subject , batch);
      nav("/attendance")
    }

    const handleUT = async() => {
      await getUt(subject, batch)
      nav("/unit-test")
    }

    const handleTermWork = async() => {

      await getBatch( batch, subject );
      nav("/term-work")
    }

  return (
    <div>
    <div className='flex flex-col min-h-screen overflow-y-scroll custom-scrollbar'>
      <div className='flex flex-col justify-around mt-20'>

      <h2 className='text-2xl font-semibold text-primary text-center'>{subject}</h2>
      <h4 className='font-medium text-secondary mt-4 text-center'>{batch} </h4>
      </div>
      <div className='flex justify-center mt-2'>
      <button
            onClick={handleMark}
            className='btn btn-outline p-4 mx-1'
            >Mark Attendance 
          </button>
      <button
            onClick={handleUT}
            className='btn btn-outline p-4 mx-1'
            >Unit Test Marks 
          </button>
      <button
            onClick={handleTermWork}
            className='btn btn-outline p-4 mx-1'
            >Term Work
          </button>

      </div>
      
        <div className='mt-2'>
            {
                assignments.map((ele) => (
                    <div className='flex justify-center w-full'>
                        <Assignment a_id={ele.a_id} title={ele.title}/>
                    </div>
                ))
            }
        </div>
        

    </div>
  </div>
  )
}

export default Assignments