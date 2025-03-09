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













const Dashboard = ({
  title,
  populationData,
  ageDistributionData,
  genderData,
  educationData,

  employmentRate,
  overallGrowthRate,
  
  
  getBusinessPopulationData,

  residents,

  communityEngagements,
  calendarEvents,
}) => {

console.log(calendarEvents);

  const format = (value) => `${value}`;

  const handleAddEvent = () => {
    Inertia.visit(route('add-event'));
  };

  const handleEventClick = (event) => {
    Inertia.visit(`/residents-and-households/edit-community-engagement/${event.id}`);
  }

  
  console.log('communityEngagements', communityEngagements);
  console.log(getBusinessPopulationData)



  const latestData = populationData.length
    ? populationData[populationData.length - 1]
    : null;

    const latestBusinessData = getBusinessPopulationData.length
    ? getBusinessPopulationData[getBusinessPopulationData.length - 1]
    : null;

    console.log(calendarEvents);

  return (
    <Layout page_title={title} className='p-5 h-full flex flex-col overflow-y-auto bg-[--color-2]'>



      <div className='grid xl:grid-cols-3 row-auto md:grid-cols-2 gap-x-5'>
        <Card
          className='border border-[--color-5] bg-[--color-1]'
          title_image={population_image}
          title={"Total Population:"}
          number={populationData.reduce((sum, item) => sum + item.population, 0)}
          percentage={latestData ? `${latestData.growth}% ` : 'N/A'}
          date={latestData ? latestData.year : 'N/A'}
        />
        <Card
          className="border border-[--color-5] bg-[--color-1]"
          title_image={briefcase_image}
          title="Registered Businesses:"
          number={getBusinessPopulationData.reduce((sum, item) => sum + item.population, 0)}
          percentage={latestData ? `${latestBusinessData.growth}% ` : 'N/A'}
          date={latestBusinessData ? latestBusinessData.year  : 'N/A'}
        />
        <Card
          className='border border-[--color-5] bg-[--color-1]'
          title_image={employment_image}
          title={"Employment Rate:"}
          number={employmentRate ? `${employmentRate}%` : 'N/A'}
          percentage={overallGrowthRate ? `${overallGrowthRate}%` : 'N/A'}
          date={latestData ? latestData.year : 'N/A'}
        />
      </div>

      <div className=' w-full h-full my-10 min-h-[1000px]'>
          <CalendarComponent
          events={calendarEvents}
          onEventClick={  handleEventClick}
          onAddEvent={ handleAddEvent}
        />
      </div>

      <div className=' grid xl:grid-cols-4 rows-auto lg:grid-cols-2 grid-rows-2 gap-x-5 mt-10 auto-h-*'>
        <LineChartComponent
          className=" border border-[--color-5] col-span-2 justify-between row-span-2 bg-[--color-1] h-[500px]"
          linechart_title='Population Growth'
          data={populationData}
        />
        <VerticalBarChart
          className="border border-[--color-5] w-full h-full justify-between max-w-3xl bg-[--color-1] col-span-2 mx-auto row-span-2"
          data={ageDistributionData}
          colors={["#4F46E5"]}
          bars={[{ key: "population", label: "Population" }]}
          layout="vertical"
          xAxisProps={{ type: "number" }}
          yAxisProps={{ type: "category", width: 120, interval: 0 }}
        />
      </div>
      <div className='mt-10 grid grid-cols-4 gap-x-5'>
        <PieChart
          title="Education Levels"
          data={educationData}
          formatTooltipValue={format}
          className=" col-span-2 border border-[--color-5] bg-[--color-1]"
        />
        <HorizontalBarChat
          className="border border-[--color-5] flex justify-between bg-[--color-1] col-span-2  items-start"
          title={'Gender'}
          data={genderData}
          colors={['#f43f5e', '#3b82f6', '#a855f7']}
          bars={[{ key: 'Female', label: 'Female' },
            { key: 'Male', label: 'Male' },
            { key: 'LGBTQ+', label: 'LGBTQ+' }]}
          layout='horizontal'
        />
        <LineChartComponent
          className=" border border-[--color-5] mt-10 col-span-4 justify-between row-span-2 bg-[--color-1] h-[500px]"
          linechart_title='Registered Business Growth'
          data={getBusinessPopulationData}
        />
      </div>
      <div className='mt-10'>
        <TableClientSideBlog
          headers={[
            { column: "id", label: "ID" },
            { column: "full_name", label: "Full Name" },
            { column: "age", label: "Age" },
            { column: "birthdate", label: "Birthdate" },
            { column: "gender", label: "Gender" },
            { column: "civil_status", label: "Civil Status" },
            { column: "education_level", label: "Education Level" },
            { column: "occupation", label: "Occupation" },
          ]}
          data={residents}
          isLoading={false}
          addButton={{ label: "Add Resident", route: "/residents-and-households/register-resident" }}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/edit-resident/${item.id}`);
              }
            },
          ]}
        />

      </div>
    </Layout>
  );
};

export default Dashboard;