// import React, { useEffect, useRef } from 'react';
// import {motion} from 'framer-motion'

// const Home = () => {

//     const containerVariants = {
//         initial: {},
//         animate: {
//           transition: {
//             staggerChildren: 0.2, // delay between each child
//           },
//         },
//       };
      

//       const letterVariants = {
//         initial: {
//           y: 140,
//           opacity: 0,
//         },
//         animate: {
//           y: 0,
//           opacity: 1,
//           transition: {
//             duration: 0.6,
//             ease: 'backOut',
//           },
//         },
//       };
      

//   return (
//     <div className='flex justify-center items-center h-screen'>
//         <div className='flex text-9xl font-bold'>
//         <motion.div
//             variants={containerVariants}
//             initial="initial"
//             animate="animate"
//             className="flex mx-1"
//             >
//             {['L', 'A', 'B', 'L', 'Y'].map((char, i) => (
//                 <motion.h1 key={i} variants={letterVariants}>
//                 {char}
//                 </motion.h1>
//             ))}
//         </motion.div>
//         </div>

//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [scaleUp, setScaleUp] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const navigate = useNavigate();

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    initial: {
      y: 140,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    const totalDelay = 0.2 * 5 + 0.6;
    const timer = setTimeout(() => {
      setScaleUp(true);
      setShowButtons(true);
    }, totalDelay * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='flex text-xl md:text-9xl font-bold'>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`flex mx-1 ${scaleUp ? 'scale-[1.5] transition-transform duration-700' : ''}`}
        >
          {['L', 'A', 'B', 'L', 'Y'].map((char, i) => (
            <motion.h1 key={i} variants={letterVariants} className='mx-1 text-primary'>
              {char}
            </motion.h1>
          ))}
        </motion.div>
      </div>

      <div className='mt-12 flex gap-8'>
        {showButtons && (
          <>
            <motion.button
              variants={buttonVariants}
              initial= {{y: 40, opacity: 0}}
              animate= {{y: 0, opacity: 100}}
              transition={{duration: 0.6, ease: 'easeIn',delay: 1}}
              onClick={() => navigate('/teacher-dash')}
              className='btn btn-ghost px-6 py-3 font-semibold shadow-lg hover:bg-accent-300 transition-all'
            >
              Teacher Login
            </motion.button>
            <motion.button
              variants={buttonVariants}
              initial= {{y: 40, opacity: 0}}
              animate= {{y: 0, opacity: 100}}
              transition={{duration: 0.6, ease: 'easeIn',delay: 1}}
              onClick={() => navigate('/student-dash')}
              className='btn btn-ghost px-6 py-3 font-semibold shadow-lg hover:bg-accent-300 transition-all'
            >
              Student View
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

