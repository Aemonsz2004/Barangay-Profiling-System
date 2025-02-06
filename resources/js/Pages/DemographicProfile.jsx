import HorizontalBarChat from '@/Components/HorizontalBarChart';
import LineChartComponent from '@/Components/LineChart';
import PieChart from '@/Components/PieChart';
import Table from '@/Components/Table';
import Layout from '@/Layouts/Layout'
import React from 'react'



// pie chart
const myData = [
  { name: "Undergraduate", value: 1000 },
  { name: "Graduate", value: 500 },
  { name: "Postgraduate", value: 600 },
  { name: "Doctoral", value: 400 },
];
const format = (value) => `${value}`;


// // bar cahrt horizontal
const genderData = [
  { category: 'Gender Ratio', Female: 52, Male: 45, LGBTQ: 3 },
];

const genderBars = [
  { key: 'Female', label: 'Female' },
  { key: 'Male', label: 'Male' },
  { key: 'LGBTQ', label: 'LGBTQ+' },
];

const genderColors = ['#f43f5e', '#3b82f6', '#a855f7']; // Colors for bars

// table example data

const columns = ['Name', 'Email', 'Role'];
const data1 = [
  { Name: 'John Doe', Email: 'john@example.com', Role: 'Admin' },
  { Name: 'Jane Smith', Email: 'jane@example.com', Role: 'User' },
  { Name: 'Alice Brown', Email: 'alice@example.com', Role: 'Editor' },
];


const linechart_data = [
  { year: 2000, population: 50000, growth: 2.1 },
  { year: 2005, population: 53000, growth: 2.3 },
  { year: 2010, population: 56000, growth: 2.5 },
  { year: 2015, population: 59000, growth: 2.7 },
  { year: 2020, population: 62000, growth: 3.0 },
  { year: 2025, population: 65000, growth: 3.2 },
];

const DemographicProfile = ({title}) => {
  return (
    <Layout
      page_title={title}
    >
    
      <h1 className='text-center text-3xl'>Population Size & Growth (Filter: Dropdown to view stats by year)</h1>
      <div className='gap-3 grid grid-cols-3 mt-10 w-full min-h-[500px]'>
        <LineChartComponent
        className='col-span-1 '
            data={linechart_data}
            linechart_title='Population Growth'
        />
        <Table
        className='col-span-2'
          data={data1}
          columns={columns}
        />
      </div>

      <h1 className='mt-10 text-center text-3xl'>Age Distribution</h1>
      <div className='gap-3 grid grid-cols-3 mt-10 w-full min-h-[500px]'>
      <HorizontalBarChat
          className="border border-[--color-5] flex justify-between bg-[--color-1] row-span-2 items-start"
          data={genderData}
          colors={genderColors}
          bars={genderBars}
          layout='horizontal'
        />
        <Table
        className='col-span-2'
          data={data1}
          columns={columns}
        />
      </div>

      <h1 className=' mt-10 text-center text-3xl'>Gender Ratio</h1>
      <div className='gap-3 grid grid-cols-3 mt-10 w-full min-h-[500px]'>
      <HorizontalBarChat
          className="border border-[--color-5] flex justify-between bg-[--color-1] row-span-2 items-start"
          data={genderData}
          colors={genderColors}
          bars={genderBars}
          layout='horizontal'
        />
        <Table
        className='col-span-2'
          data={data1}
          columns={columns}
        />
      </div>

      <h1 className='mt-10 text-center text-3xl'>Education Levels</h1>
      <div className='gap-3 grid grid-cols-3 mt-10 w-full min-h-[500px]'>
      <PieChart
      title="Education Levels"
      data={myData}
      formatTooltipValue={format}
      className=" col-span-1 border border-[--color-5] bg-[--color-1]"
    />
        <Table
        className='col-span-2'
          data={data1}
          columns={columns}
        />
      </div>

      <h1 className='mt-10 text-center text-3xl'>Occupation</h1>
      <div className='gap-3 grid grid-cols-3 mt-10 w-full min-h-[500px]'>
      <PieChart
      title="Education Levels"
      data={myData}
      formatTooltipValue={format}
      className=" col-span-1 border border-[--color-5] bg-[--color-1]"
    />
        <Table
        className='col-span-2'
          data={data1}
          columns={columns}
        />
      </div>
    
        <h2><strong>2. Demographic Profile</strong></h2>
    <ul>
    &nbsp;<li><strong>Population Size & Growth</strong>
            <ul>
                <li>Chart: Line Chart showing population growth over the years</li>
                <li>Table: Population count per year</li>
                <li>Filter: Dropdown to view stats by year</li>
            </ul>
        </li>
        &nbsp;<li><strong>Age Distribution</strong>
            <ul>
                <li>Chart: Horizontal Bar Chart with age groups</li>
                <li>Table: Age group breakdown</li>
            </ul>
        </li>
        &nbsp;<li><strong>Gender Ratio</strong>
            <ul>
                <li>Chart: Bar Chart (Male vs Female vs LGBTQ)</li>
                <li>Table: Gender population count</li>
            </ul>
        </li>
        &nbsp;<li><strong>Education Levels</strong>
            <ul>
                <li>Chart: Pie Chart showing education attainment</li>
                <li>Table: Education level breakdown per gender</li>
            </ul>
        </li>
        &nbsp;<li><strong>Occupation</strong>
            <ul>
                <li>Chart: Doughnut Chart or Bar Chart (Job sectors)</li>
                <li>Table: Occupation count per category</li>
            </ul>
        </li>
    </ul>
    </Layout>
  )
}

export default DemographicProfile