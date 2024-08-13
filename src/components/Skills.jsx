import React from 'react';
import skills from "./data/skills.json"

function Skills() {
  return (
    <>
    <div className='container skills' id='skills'
    data-aos="flip-right" data-aos-duration="2000">
     <h1> Skills</h1>
     <div className='items' >
     {skills.map((data)=>(<>
    
      <div className='item' key={data.id}>
        <img src={`/assets/${data.imageSrc}`} alt=''/>
        <h3>{data.title}</h3>
      </div>
     
     </>))}
     </div>
    </div>
      
    </>
  )
}

export default Skills
