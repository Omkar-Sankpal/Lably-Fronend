import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useTeacherStore } from '../store/use.Teacher.Store';
import { Plus, X } from 'lucide-react';
import TW_info_window from './TW_info_window';
const TW = ({ele}) => {

    const { current_assignment, updateUT, t_sub, getTermWork , batch} = useTeacherStore(); 
    const [openSession ,setOpenSession] = useState(0);


    const handleCreatelab = async() => {
        await getTermWork(ele.roll_no, t_sub, batch)
        setOpenSession(1);
      };
    
      const handleClose = () => {
        setOpenSession(0);
      };
  
    return (
      <motion.div className='border border-primary/10 bg-base-300 my-2 w-full max-w-5xl rounded-lg hover:bg-secondary/5 p-4 flex flex-col md:flex-row md:flex-wrap'>
        
        <div className='font-medium p-2 border border-primary/10 text-center w-full md:w-[80px]'>
          {ele.roll_no || "0000"}
        </div>
  
        <div className='font-medium p-2 border border-primary/10 text-center w-full md:flex-1'>
          {ele.student_name || "Name"}
        </div>
        <div className='p-2 border border-primary/10 w-full flex justify-center items-center'>
          <button 
            className="btn btn-outline btn-primary w-full md:w-auto" 
            onClick={handleCreatelab}
          >
            See TermWork
          </button>
        </div>

        {openSession ? (
        <>
          <div className='w-full h-[100vh] backdrop-blur-lg absolute top-0 left-0 flex flex-col justify-center items-center '>
            <div className='flex justify-end items-end max-w-lg w-full bg-base-300'>
              <div>
                <button onClick={handleClose} className='text-end hover:bg-primary/20 rounded-full'>
                  <X className='size-5' />
                </button>
              </div>

            </div>
              <div className='flex justify-center bg-base-300 w-full max-w-lg'>
                <TW_info_window />
              </div>
          </div>
        </>
      ) : null}
      </motion.div>
    );
  };

export default TW