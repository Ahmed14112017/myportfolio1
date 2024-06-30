import React from 'react';
import SkillsResume from './SkillsResume';

const Skills = ({ skillsList }) => {
  return (
    <div className="rounded-xl">
      {skillsList.map((skill, index) => (
        <SkillsResume key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
