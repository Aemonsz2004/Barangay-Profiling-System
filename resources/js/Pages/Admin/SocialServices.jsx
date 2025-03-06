import LineChartComponent from '@/Components/LineChart';
import React, {useState, useEffect} from 'react';
import Card from '@/Components/Card';
import Layout from '@/Layouts/Layout';
import VerticalBarChart from '@/Components/VerticalBarChart';
import HorizontalBarChat from '@/Components/HorizontalBarChart';
import population_image from '../../../../public/images/user.png';
import briefcase_image from '../../../../public/images/briefcase.png';
import employment_image from '../../../../public/images/employment_image.png';
import PieChart from '@/Components/PieChart';
import TableClientSideBlog from '@/Components/TableClientSideBlog';
import { Inertia } from '@inertiajs/inertia';
import CalendarComponent from '@/Components/CalendarComponent';

const format = (value) => `${value}`;

const SocialService = ({
  title,
  populationData,
  ageDistributionData,
  genderData,
  educationData,

  occupationData,
  employmentRate,
  overallGrowthRate,
  social_services,

  residents
}) => {


  const latestData = populationData.length
    ? populationData[populationData.length - 1]
    : null;



  return (
    <Layout page_title={title} className='p-5 h-full flex flex-col overflow-y-auto bg-[--color-2]'>



      <div className='grid xl:grid-cols-2 row-auto md:grid-cols-2 gap-x-5'>
        <Card
          className='border border-[--color-5] bg-[--color-1]'
          title_image={population_image}
          title={"Total Population:"}
          number={populationData.reduce((sum, item) => sum + item.population, 0)}
          percentage={latestData ? `${latestData.growth}% ` : 'N/A'}
          date={latestData ? latestData.year : 'N/A'}
        />
      </div>

      <div className='mt-10 grid grid-cols-4 gap-5 gap-y-10' >
        <PieChart
          title="Education Levels"
          data={educationData}
          formatTooltipValue={format}
          className=" col-span-2  justify-center border border-[--color-5] bg-[--color-1]"
        />

      </div>
      <div className='mt-10'>

        <TableClientSideBlog
          headers={[
            { column: "id", label: "ID" },
            { column: "service_type", label: "Service Type" },
            { column: "name", label: "Name" },
            { column: "description", label: "Description" },
            { column: "contact", label: "Contact" },
          ]}
          data={social_services}
          isLoading={false}
          addButton={{label: 'Add Social Service', route: 'add-social-service'}}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/`);
              },
            },
          ]}
        />
      </div>
    </Layout>
    
  );
};

export default SocialService;