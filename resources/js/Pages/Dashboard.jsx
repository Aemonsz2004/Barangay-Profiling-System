import LineChartComponent from '@/Components/LineChart';
import React from 'react';
import Card from '@/Components/Card';
import Layout from '@/Layouts/Layout';
import VerticalBarChart from '@/Components/VerticalBarChart';
import HorizontalBarChat from '@/Components/HorizontalBarChart';

import image from '../../../public/svg/admin-svg.svg';
import increase from '../../../public/svg/increase-svg.svg';
import population_image from '../../../public/images/user.png'
import briefcase_image from '../../../public/images/briefcase.png'


const genderData = [
  { category: 'Gender Ratio', Female: 52, Male: 45, LGBTQ: 3 },
];

const genderBars = [
  { key: 'Female', label: 'Female' },
  { key: 'Male', label: 'Male' },
  { key: 'LGBTQ', label: 'LGBTQ+' },
];

const genderColors = ['#f43f5e', '#3b82f6', '#a855f7']; // Colors for bars


const ageDistributionData = [
  { category: 'Under 1', population: 1716 },
  { category: '1 to 4', population: 6647 },
  { category: '5 to 9', population: 7731 },
  { category: '10 to 14', population: 7376 },
  { category: '15 to 19', population: 8532 },
  { category: '20 to 24', population: 10426 },
  { category: '25 to 29', population: 9175 },
  { category: '30 to 34', population: 7007 },
  { category: '35 to 39', population: 5866 },
  { category: '40 to 44', population: 4608 },
  { category: '45 to 49', population: 3837 },
  { category: '50 to 54', population: 3178 },
  { category: '55 to 59', population: 2830 },
  { category: '60 to 64', population: 2122 },
  { category: '65 to 69', population: 1371 },
  { category: '70 to 74', population: 733 },
  { category: '75 to 79', population: 453 },
  { category: '80 and over', population: 356 },
];

const Dashboard = () => {
  return (

<Layout className='p-5 mt-4 flex flex-col overflow-y-auto bg-[--color-2]'>
      
    <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-x-5'>


          <Card
            className='border border-[--color-4] bg-[--color-1]'
            title_image={population_image}
            title={"Total Population:"}
            number={'6969'}
            percentage={'2.3%'}
            date={'12/12/2004'}
          />




          <Card
            className='border border-[--color-4] bg-[--color-1]'
            title_image={briefcase_image}
            title={"Registered Business:"}
            number={'6969'}
            percentage={'2.3%'}
            date={'12/12/2004'}
          />




      </div>
        
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-rows-auto gap-4 mt-10 h-[100%] '>
        <LineChartComponent
        className=" border border-[--color-4] col-span-1 justify-between row-span-2 bg-[--color-1] " />

        <VerticalBarChart
          className="border border-[--color-4] w-full h-full justify-between max-w-3xl bg-[--color-1] mx-auto row-span-2 aspect-square"
          data={ageDistributionData}
          colors={["#4F46E5"]}
          bars={[{ key: "population", label: "Population" }]}
          layout="vertical"
          xAxisProps={{ type: "number" }}
          yAxisProps={{ type: "category", width: 120, interval: 0 }}
        />
        <HorizontalBarChat
          className="border border-[--color-4] flex justify-between bg-[--color-1] row-span-2 items-start"
          data={genderData}
          colors={genderColors}
          bars={genderBars}
          layout='horizontal'
        />

      </div>
</Layout>

  );
};

export default Dashboard;