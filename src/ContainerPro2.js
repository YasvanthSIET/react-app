import React from 'react'

const ContainerPro2 = ({finding}) => {
  return (
    <ul id='result'>
      {finding.map((item) => (
        <li key={item.id}>
          &#x2022; {JSON.stringify(item)}
        </li>
      ))}
      
    </ul>
  )
}

export default ContainerPro2