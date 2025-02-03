import React from 'react'


const Card = ({className, title, title_image, number, percentage, percentage_image, date}) => {
  return (
  
  <div class={`flex flex-col items-center justify-center  min-w-xs  w-[100%] h-[90%] p-4 gap-5 bg-blue-50 rounded-2xl shadow-md text-center grow flex-wrap ${className}`}>

    <div class="flex items-center justify-center space-x-2 text-gray-700 text-lg font-semibold">
      <img src={title_image} alt="Person Icon" class="w-6 h-6" />
      <span>{title}</span>
    </div>
    
    <div class="flex items-center justify-center  text-sm mt-1">
      <div class="text-4xl font-bold mt-2 mr-3">{number}</div>
      <span className='text-green-500'>{percentage}</span>
      <img src={percentage_image} alt="Increase Icon" class="w-4 h-4 ml-1" />
    </div>
    <div class="text-gray-500 text-xs mt-2">{`Updated as of ${date}`}</div>
  </div>

  )
}

export default Card