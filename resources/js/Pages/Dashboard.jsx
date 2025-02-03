import LineChartComponent from '@/Components/LineChart';
import React from 'react';
import Card from '@/Components/Card';
import Layout from '@/Layouts/Layout';
import BarChartComponent from '@/Components/BarChart';
import HBarChartComponent from '@/Components/HorizontalBarChart';

import image from '../../../public/svg/admin-svg.svg';
import increase from '../../../public/svg/increase-svg.svg';



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
const ageBars = [
  { key: 'population', label: 'value1' },
];
const ageColors = ['#4F46E5'];




// const genderData = [
//   { category: 'Male', value: 45 },
//   { category: 'Female', value: 52 },
//   { category: 'LGBTQ+', value: 3 },
// ];

// // Define bars and colors
// const genderBars = [{ key: 'value', label: 'Population' }];
// const genderColors = ['#3b82f6', '#f43f5e', '#a855f7']; // Colors for Male, Female, LGBTQ+


const Dashboard = () => {
  return (

<Layout className='grid grid-cols-3 grid-rows-3z w-full gap-[25px] gap-x-[50px] m-10 mb-0'>

        <div className="flex items-start justify-center">
          <Card
            title_image={image}
            title={"Total Population:"}
            number={'6969'}
            percentage={'2.3%'}
            percentage_image={increase}
            date={'12/12/2004'}
          />
        </div>
        <div className="flex items-start justify-center">
          <Card
            title_image={'/images/person.svg'}
            title={"Registered Business:"}
            number={'6969'}
            percentage={'2.3%'}
            percentage_image={'/images/increase.svg'}
            date={'12/12/2004'}
          />
        </div>


        <HBarChartComponent
          className="flex justify-center items-start"
          data={genderData}
          colors={genderColors}
          bars={genderBars}
          layout='horizontal'
        />
        
        <LineChartComponent
        className="col-span-1 row-span-2" />

        <BarChartComponent
          data={ageDistributionData}
          colors={["#4F46E5"]}
          bars={[{ key: "population", label: "Population" }]}
          className="w-full max-w-3xl mx-auto row-span-2"
          layout="vertical"
          xAxisProps={{ type: "number" }}
          yAxisProps={{ type: "category", width: 120, interval: 0 }}
        />

</Layout>

  );
};

export default Dashboard;