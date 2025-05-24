import React from 'react';
import { motion } from 'framer-motion';
import { useTeacherStore } from '../store/use.Teacher.Store';
import { useNavigate } from 'react-router-dom';

const BatchCard = ({ subject, batch }) => {

    const {getBatch} = useTeacherStore();

    // console.log("Batches here",batch);
    
    const navigate = useNavigate();

    const handleBatch = async() => {
        await getBatch(batch, subject);
        navigate('/batch');

    }

  return (
    <motion.div 
        initial = {{y: 20}}
        animate= {{y:0}}
        transition={{ duration: 0.8 }}
        className='bg-base-200 rounded-lg w-[250px] border border-primary text-center p-10 mx-4 my-4 hover:bg-base-300'>
      <div className="font-semibold">Batch details</div>
      <motion.div className="text-primary">{subject}</motion.div>
      <motion.div className="text-secondary">{batch}</motion.div>

      <button className="btn btn-outline btn-accent mt-2" onClick={handleBatch}>Select</button>
    </motion.div>
  );
};

export default BatchCard;