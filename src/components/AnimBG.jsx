// import React from 'react';
// import { motion } from 'framer-motion';

// const colors = [
//   'bg-primary/25',
//   'bg-secondary/25',
//   'bg-accent/25',
//   'bg-neutral/25',
// ];

// const bubbleColors = [
//   'bg-secondary/75',
//   'bg-accent/75',
//   'bg-neutral/75',
//   'bg-primary/75',
// ];

// const AnimBG = () => {
//   const columnCount = Math.floor(window.innerWidth / 28); // 20px + margin

//   // Generate random durations for each column
//   const durations = Array.from({ length: columnCount }, () =>
//     (Math.random() * 3 + 3).toFixed(2) // random between 3s and 6s
//   );

//   return (
//     <div className="flex w-screen overflow-hidden">
//       {durations.map((duration, i) => (
//         <div
//           key={i}
//           className={`w-[20px] h-[100vh] m-1 ${colors[i % colors.length]}`}
//         >
//           <motion.div
//             className={`w-[20px] h-[40px] rounded-lg ${bubbleColors[i % bubbleColors.length]}`}
//             animate={{ y: [0, 675, 0] }}
//             transition={{
//               duration: parseFloat(duration),
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimBG;

import React from 'react';
import { motion } from 'framer-motion';

const colors = [
  'bg-primary/25',
  'bg-secondary/25',
  'bg-accent/25',
  'bg-neutral/25',
];

const bubbleColors = [
  'bg-secondary/75',
  'bg-accent/75',
  'bg-neutral/75',
  'bg-primary/75',
];

const AnimBG = () => {
  const columnCount = Math.floor(window.innerWidth / 28);

  const minDuration = 3;
  const maxDuration = 6;
  const durations = Array.from({ length: columnCount }, (_, i) =>
    (minDuration + ((maxDuration - minDuration) * i) / (columnCount - 1)).toFixed(2)
  );

  return (
    <div className="flex w-screen overflow-hidden">
      {durations.map((duration, i) => (
        <div
          key={i}
          className={`w-[20px] h-[100vh] m-1 ${colors[i % colors.length]}`}
        >
          <motion.div
            className={`w-[20px] h-[40px] rounded-lg ${bubbleColors[i % bubbleColors.length]}`}
            animate={{ y: [0, 675, 0] }}
            transition={{
              duration: parseFloat(duration),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimBG;
