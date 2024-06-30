import React from 'react';
import { motion } from 'framer-motion';

const SkillsResume = ({ skill }) => {
  return (
    <div className='mt-10 w-full'>
      <div className="text-xl text-lightText font-bold">{skill.name}</div>
      <div className='flex gap-3 items-center'>
        <div className="w-full rounded-full h-4 bg-gray-200">
          <motion.div
            className="bg-blue-600 h-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="text-right text-lightText text-lg">{skill.level}%</div>
      </div>
    </div>
  );
};

export default SkillsResume;
