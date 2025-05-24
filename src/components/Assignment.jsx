import React from 'react'
import {motion} from 'framer-motion'
import { useTeacherStore } from '../store/use.Teacher.Store'
import { useNavigate } from 'react-router-dom';

const Assignment = ({a_id, title}) => {

    const {setCurrAssignment,getStudentsAss_Details, batch } = useTeacherStore();

    const navigate = useNavigate();

    
    
    const handleAssignment = async() => {
        console.log("Assignment: ",a_id, " batch", batch);
        setCurrAssignment(a_id, title)
        await getStudentsAss_Details({a_id, batch})
        navigate('/assignment');
    }

  return (
    <motion.div 
    
    onClick={handleAssignment}
    className='border border-primary/10 bg-base-300 m-1 max-w-3xl w-full flex rounded-lg hover:bg-secondary/5 cursor-pointer'>
        <div className='font-medium p-2 border border-primary/10 text-center max-w-[140px] w-full rounded-lg'>
            {a_id || "0000"}
        </div>
        <div className='font-medium p-2 border border-primary/10 w-full rounded-lg text-center'>
            {title || "title"}
        </div>
    </motion.div>
  )
}

export default Assignment