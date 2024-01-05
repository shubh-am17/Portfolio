import React from 'react'

function SkillBox({name,urlLoc}) {
  return (
    <div className='skillBox'>
        <img src={urlLoc} alt={name}/>
        
        <p>{name}</p>
    </div>
  )
}

export default SkillBox
