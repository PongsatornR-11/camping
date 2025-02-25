import React from 'react'
import { Input } from '../ui/input'

const search = () => {
  return (
    <Input 
      type = "text"
      placeholder = "Search locations"
      className='max-w-xs'
    />
  )
}

export default search