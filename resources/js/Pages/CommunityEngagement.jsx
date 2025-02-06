import PieChart from '@/Components/PieChart'
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

// table example data
const columns = ['Name', 'Email', 'Role'];
const data = [
  { Name: 'John Doe', Email: 'john@example.com', Role: 'Admin' },
  { Name: 'Jane Smith', Email: 'jane@example.com', Role: 'User' },
  { Name: 'Alice Brown', Email: 'alice@example.com', Role: 'Editor' },
];

const CommunityEngagement = ({title}) => {
  return (
    
    <Layout
    page_title={title}>

    <h1 className='text-center text-3xl'>Resident Participation</h1>
    <div className='gap-3 grid grid-cols-3 mt-10 w-full min-h-[500px]'>
        <PieChart
          title="Education Levels"
      data={myData}
      formatTooltipValue={format}
      className=" col-span-1 border border-[--color-5] bg-[--color-1]"
        />

        <Table
      table_title='Active Community Driven-Projects'
      className='col-span-2 border border-[--color-5] bg-[--color-1]'
      columns={columns} data={data} />
    </div>





      <h2><strong>5. Community Engagement</strong></h2>
    <ul>
    &nbsp;<li><strong>Resident Participation</strong>
            <ul>
                <li>Chart: Pie Chart showing community participation</li>
                <li>Table: List of active community-driven projects</li>
            </ul>
        </li>
        &nbsp;<li><strong>Feedback System (Optional)</strong>
            <ul>
                <li>Form: Residents can submit feedback on local programs</li>
            </ul>
        </li>
    </ul>
    </Layout>
  )
}

export default CommunityEngagement