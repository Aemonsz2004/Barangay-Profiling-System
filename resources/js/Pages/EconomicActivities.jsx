import LineChartComponent from '@/Components/LineChart';
import PieChart from '@/Components/PieChart';
import Table from '@/Components/Table';
import Layout from '@/Layouts/Layout'
import React from 'react'

// lie chart example dara
const linechart_data = [
  { year: 2000, population: 50000, growth: 2.1 },
  { year: 2005, population: 53000, growth: 2.3 },
  { year: 2010, population: 56000, growth: 2.5 },
  { year: 2015, population: 59000, growth: 2.7 },
  { year: 2020, population: 62000, growth: 3.0 },
  { year: 2025, population: 65000, growth: 3.2 },
];

// pie chart
const myData = [
  { name: "Undergraduate", value: 1000 },
  { name: "Graduate", value: 500 },
  { name: "Postgraduate", value: 600 },
  { name: "Doctoral", value: 400 },
];
const format = (value) => `${value}`;

// table example data

const columns = ['Name', 'Email', 'Role'];
const data = [
  { Name: 'John Doe', Email: 'john@example.com', Role: 'Admin' },
  { Name: 'Jane Smith', Email: 'jane@example.com', Role: 'User' },
  { Name: 'Alice Brown', Email: 'alice@example.com', Role: 'Editor' },
];


const EconomicActivities = ({title}) => {
  return (
  <Layout
  page_title={title}
  >

 <h1 className='text-center text-3xl'>Business & Industries</h1>
  <div className='gap-3 grid mt-10 grid-cols-3 w-full min-h-[500px]'>

    <PieChart
      title="Education Levels"
      data={myData}
      formatTooltipValue={format}
      className=" cols-span row-span-2 border border-[--color-5] bg-[--color-1]"
    />

<Table
      className='col-span-2 row-span-2 border border-[--color-5] bg-[--color-1]'
      columns={columns} data={data}
      table_title='List of Businesses'
        />
  </div>


  <h1 className='mt-10 text-center text-3xl'>Employment Rates</h1>
  <div className='gap-3 grid mt-10 grid-cols-3 w-full min-h-[500px]'>

  <LineChartComponent
        className=" border border-[--color-5] col-span-1 justify-between row-span-2 bg-[--color-1] h-[500px]"
        linechart_title='Population Growth'
        data={linechart_data}
        />

<Table
      className='row-span-2 col-span-2 border border-[--color-5] bg-[--color-1]'
      columns={columns} data={data} />
  </div>
  
    <h2><strong>4. Economic Activities</strong></h2>
    <ul>
    &nbsp;<li><strong>Businesses & Industries</strong>
            <ul>
                <li>Chart: Pie Chart of business types</li>
                <li>Table: List of businesses with type and registration date</li>
            </ul>
        </li>
        &nbsp;<li><strong>Employment Rates</strong>
            <ul>
                <li>Chart: Line Chart showing employment trends over time</li>
                <li>Table: Unemployment rate per year</li>
            </ul>
        </li>
    </ul>
  </Layout>  )
}

export default EconomicActivities