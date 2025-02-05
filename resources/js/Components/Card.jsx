import React from 'react'
import '../../css/app.css';

const Card = ({className, title, title_image, number, percentage, date}) => {
  return (
  
  <div class={`flex flex-col rounded-xl items-center justify-center  min-w-xs  w-[100%] h-[100%]  bg-[--color-1]  border-[1px] border-blue-gray-100 shadow-sm   text-center grow flex-wrap ${className}`}>

    <div className='flex w-full justify-between items-center p-4 '>
    
      <div class="flex space-x-2 text-gray-700 text-lg font-semibold">

      <div className=''>
        <img src={title_image} alt="Person Icon" class="  h-[60px] w-auto" />
      </div>


      </div>

      <div class="flex flex-col justify-start text-sm mt-1">
      <span className='block text-[1.1rem] text-gray-500'>{title}</span>
        <div className='flex mt-3 justify-center items-center'>
          <div class="text-4xl font-bold mr-3 ">{number}</div>
          <span className='text-green-500'>{percentage}</span>
        </div>
      </div>

    </div>

    <div class="w-full p-4 text-gray-500 text-sm  border-t-[1px]">{`Updated as of ${date}`}</div>

  </div>

  )
}

export default Card