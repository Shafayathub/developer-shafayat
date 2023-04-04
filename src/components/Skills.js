import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center font-semibold rounded-full bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 pb-10 w-full text-8xl font-bold text-center">
        Skills
      </h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center font-semibold rounded-full bg-dark text-light p-2 shadow-dark cursor-pointer">
          Web
        </motion.div>
        <Skill name={'HTML'} x="-25vw" y="2vw" />
        <Skill name={'CSS'} x="-5vw" y="-11vw" />
        <Skill name={'Javascript'} x="23vw" y="6vw" />
        <Skill name={'React JS'} x="0vw" y="11vw" />
        <Skill name={'Next JS'} x="-20vw" y="-15vw" />
        <Skill name={'Sanity.io'} x="15vw" y="-12vw" />
        <Skill name={'Firebase'} x="-15vw" y="12vw" />
        <Skill name={'Express JS'} x="32vw" y="-5vw" />
        <Skill name={'Bootstrap'} x="-32vw" y="-5vw" />
        <Skill name={'Node JS'} x="0vw" y="-19vw" />
        <Skill name={'Deployment'} x="25vw" y="-18vw" />
        <Skill name={'Tailwind CSS'} x="15vw" y="16vw" />
      </div>
    </>
  );
};

export default Skills;
