import React from 'react'
import styles from "./CreatedGroup.module.css"


const CreatedGroup = ({groupName,upperCaseName,color,onClick}) => {

  //  color prop based on user Selection
  const circleColor = {
    backgroundColor: color
  }

 

  return (
    <div className={styles.main} onClick={onClick}>
      <div className={styles.circle} style={circleColor}>
        <p className={styles.shortName}>{upperCaseName}</p>
      </div>
      <p className={styles.groupName} >{groupName}</p>
    </div>
  )
}

export default CreatedGroup;
