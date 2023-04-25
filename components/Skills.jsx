import React from "react";
import SkillsItem from "../common/SkillsItem";
import dataSkills from "../utils/dataSkills";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-2 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-secondary font-bold">Habilidades</p>
        <h2 className="py-4">¿Qué conocimientos poseo?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {dataSkills.map(skills => 
            <SkillsItem key={skills.name} skills={skills}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
