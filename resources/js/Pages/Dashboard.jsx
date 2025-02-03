import Card from '@/Components/Card'
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    
    <div className='min-h-screen '>
    
    <Navbar />

    <div className='flex'>

        <Sidebar />

      <div className='grid grid-cols-3 grid-rows-3 w-full gap-[25px] m-10'>

      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}/>
      <Card
        className="col-span-2 "
        title={"Total Population:"}
        number={'6969'}
        percentage={'2.3%'}
        date={'12/12/2004'}
      />
        

      </div>

    </div>



    
    </div>
  )
}

export default Dashboard