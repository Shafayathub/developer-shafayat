import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center font-semibold rounded-full bg-dark md:bg-transparent dark:md:bg-transparent dark:bg-light text-light md:text-dark dark:text-dark dark:md:text-light py-3 px-6 md:px-3 shadow-dark cursor-pointer absolute xs:text-xs"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 xl:mt-32 pb-10 w-full text-8xl md:text-6xl font-bold text-center">
        Skills
      </h2>
      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm dark:bg-circularDark dark:lg:bg-circularDarkLg dark:md:bg-circularDarkMd dark:sm:bg-circularDarkSm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center font-semibold rounded-full bg-dark dark:bg-light text-light dark:text-dark p-2 shadow-dark cursor-pointer xs:text-xs">
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
        <Skill name={'Mongo DB'} x="-25vw" y="18vw" />
        <Skill name={'Tailwind CSS'} x="15vw" y="16vw" />
      </div>
    </>
  );
};

export default Skills;
