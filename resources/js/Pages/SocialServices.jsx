import HorizontalBarChat from '@/Components/HorizontalBarChart'
import Table from '@/Components/Table';
import Layout from '@/Layouts/Layout'
import React from 'react'
import PieChart from '@/Components/PieChart';

// pie chart
const myData = [
  { name: "Undergraduate", value: 1000 },
  { name: "Graduate", value: 500 },
  { name: "Postgraduate", value: 600 },
  { name: "Doctoral", value: 400 },
];
const format = (value) => `${value}`;

// bar cahrt horizontal
const genderData = [
  { category: 'Gender Ratio', Female: 52, Male: 45, LGBTQ: 3 },
];

const genderBars = [
  { key: 'Female', label: 'Female' },
  { key: 'Male', label: 'Male' },
  { key: 'LGBTQ', label: 'LGBTQ+' },
];

const genderColors = ['#f43f5e', '#3b82f6', '#a855f7']; // Colors for bars



// tble example data 
const columns = ['Name', 'Email', 'Role'];
const data = [
  { Name: 'John Doe', Email: 'john@example.com', Role: 'Admin' },
  { Name: 'Jane Smith', Email: 'jane@example.com', Role: 'User' },
  { Name: 'Alice Brown', Email: 'alice@example.com', Role: 'Editor' },
];

const SocialServices = ({title}) => {
  return (
    <Layout
    page_title={title}
    >

<h1 className='text-center text-3xl'>Healthcare Services</h1>
<div className='gap-3 mt-10 grid grid-cols-3 w-full min-h-[500px]'>

      <HorizontalBarChat
          className="border border-[--color-5] flex justify-between bg-[--color-1] row-span-2 items-start"
          data={genderData}
          colors={genderColors}
          bars={genderBars}
          layout='horizontal'
        />

      <Table
      className='col-span-2 border border-[--color-5] bg-[--color-1]'
      columns={columns} data={data} />


</div>

<h1 className='text-center text-3xl mt-10'>Education Services Services</h1>
<div className='gap-3  mt-10 grid g-2 grid-cols-3 w-full min-h-[500px]'>

      <HorizontalBarChat
          className="border border-[--color-5] flex justify-between bg-[--color-1] row-span-2 items-start"
          data={genderData}
          colors={genderColors}
          bars={genderBars}
          layout='horizontal'
        />

      <Table
      className='col-span-2 border border-[--color-5] bg-[--color-1]'
      columns={columns} data={data} />


</div>



<h1 className='text-center text-3xl mt-10'>Social Welfare Programs</h1>
<div className='gap-3  mt-10 grid grid-cols-3 w-full min-h-[500px]'>

<PieChart
      title="Education Levels"
      data={myData}
      formatTooltipValue={format}
      className=" col-span-1 border border-[--color-5] bg-[--color-1]"
    />

      <Table
      className='col-span-2 border border-[--color-5] bg-[--color-1]'
      columns={columns} data={data} />

</div>


      <h2><strong>3. Social Services</strong></h2>
    <ul>
    &nbsp;<li><strong>Healthcare Services</strong>
            <ul>
                <li>Chart: Bar Chart of healthcare facilities per area</li>
                <li>Table: List of available hospitals, clinics, and services</li>
            </ul>
        </li>
        &nbsp;<li><strong>Education Services</strong>
            <ul>
                <li>Chart: Bar Chart of schools per education level</li>
                <li>Table: List of schools with student population</li>
            </ul>
        </li>
        &nbsp;<li><strong>Social Welfare Programs</strong>
            <ul>
                <li>Chart: Pie Chart showing participation in programs</li>
                <li>Table: Program details and number of beneficiaries</li>
            </ul>
        </li>
    </ul>
    </Layout>
  )
}

export default SocialServices