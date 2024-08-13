import React from 'react';
import experience from "./data/experience.json";


function Education() {
  return (
    <>
      <div className='container ex' id='experience'>
        <h1> Education</h1>
        {
          experience.map((data)=>{
            return(
             <>
              <div key={data.id} className='ex-items text-center my-5'
              data-aos="zoom-in-down" data-aos-duration="1000">
              <div className='left'>
                <img src={`/assets/${data.imageSrc}` } alt=''/>

              </div>
              <div className='right'>
                <h2>{data.role}</h2>
                <h4>{data.startDate} {data.endDate}{data.location}</h4>
                
              </div>

              </div>
             </>
            )
          })
        }

      </div>
    </>
  )
}

export default Education
