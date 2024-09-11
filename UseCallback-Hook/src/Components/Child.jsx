import React, { memo } from 'react'

const Child = ({handler}) => {
    console.log("Child Component")
  return (
    <div>Child</div>
  )
}

export default memo(Child)