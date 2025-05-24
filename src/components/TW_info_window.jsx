import React from 'react'
import { useTeacherStore } from '../store/use.Teacher.Store'
import {motion} from 'framer-motion'

const TW_info_window = () => {

    const {tw1, tw2, tw3 } = useTeacherStore();
    
    console.log(
        "1 : " , tw1 , 
        "2 " , tw2, 
        " 3 : ", tw3 
    );
    
    console.log(tw1.data[0]?.total_psdl_marks , "/" , tw1.data[0]?.total_psdl_marks_capped);
    console.log(tw2.data[0]?.total_present, "/" , tw2.data[0]?.total_records);
    console.log(tw3.data);
    
    const termwork = () => {
        const lab_mark = ((tw1.data[0]?.total_psdl_marks || 0)/( tw1.data[0]?.total_psdl_marks_capped || 10))*60 ; 
        const attendace =  (tw2.data[0]?.total_present/ tw2.data[0]?.total_records)*20; 
        const ut = ((tw1.data[0]?.total_present || 0 )/90)*20 ; 

        return lab_mark + attendace + ut ; 
    }

  return (
    <motion.div 
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:100}}
        transition={{duration:0.6}}
        className='flex flex-col items-center rounded-lg bg-gradient-to-br from-base-300 via-primary/20 to-primary/10 p-4'>
        <div className='text-center text-bold'>Term Work Marks</div> 

        <div className='bg-primary/10 p-4 rounded-lg mb-2'>
            <div className='text-center text-lg'>
                Assignment marks
            </div>
            <div className='text-center'>
            {tw1.data[0]?.total_psdl_marks || 0} / {tw1.data[0]?.total_psdl_marks_capped || 10 }
            </div>
        </div>
        <div className='bg-secondary/10 p-4 rounded-lg mb-2'>
            <div className='text-center text-lg'>
                Attendance
            </div>
            <div className='text-center'> 
                {tw2.data[0]?.total_present} / {tw2.data[0]?.total_records}
            </div>  
        </div>
        <div className='bg-accent/10 p-4 rounded-lg mb-2'>
            <div className='text-center text-lg'>
                UT Marks
            </div>
            <div className='text-center'>
                {tw1.data[0]?.total_present || " Not updated"} / 90
            </div>
        </div>

        <div className='max-w-lg w-full rounded-lg flex justify-center'>
            <div className='w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex justify-center items-center'>
                <div className='w-28 h-28 rounded-full bg-base-300 text-center flex justify-center items-center'>
                    <div className='text-primary text-2xl font-bold'>
                        {Math.floor(termwork()/4)}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default TW_info_window
