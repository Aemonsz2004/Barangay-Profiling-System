import React from 'react';
import Card from '@/Components/Card';
import Layout from '@/Layouts/Layout';
import population_image from '../../../../public/images/user.png';
import employment_image from '../../../../public/images/employment_image.png';
import PieChart from '@/Components/PieChart';
import TableClientSideBlog from '@/Components/TableClientSideBlog';
import { Inertia } from '@inertiajs/inertia';


const format = (value) => `${value}`;

const EconomicActivities = ({
  title,
  populationData,
  ageDistributionData,
  genderData,
  educationData,

  occupationData,
  employmentRate,
  overallGrowthRate,
  
  businesses,
  businessesData,
  getBusinessPopulationData,
  residents
}) => {


  const latestData = populationData.length
    ? populationData[populationData.length - 1]
    : null;

  console.log(businesses);

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

        <Card
          className='border border-[--color-5] bg-[--color-1]'
          title_image={employment_image}
          title={"Employment Rate:"}
          number={employmentRate ? `${employmentRate}%` : 'N/A'}
          percentage={overallGrowthRate ? `${overallGrowthRate}%` : 'N/A'}
          date={latestData ? latestData.year : 'N/A'}
        />
      </div>

      <div className='mt-10 grid grid-cols-4 gap-5 gap-y-10' >

        <PieChart
          title="Occupation Data"
          data={occupationData}
          formatTooltipValue={format}
          className=" col-span-2 border border-[--color-5] bg-[--color-1]"
        />

        <PieChart
          title="Businesses Data"
          data={businessesData}
          formatTooltipValue={format}
          className=" col-span-2 border border-[--color-5] bg-[--color-1]"
        />

      </div>
      <div className='mt-10'>
        <TableClientSideBlog
          headers={[
            { column: "id", label: "ID" },
            { column: "business_name", label: "Business Name" },
            { column: "business_address", label: "Business Address" },
            { column: "business_type", label: "Business Type" },
            { column: "owner_name", label: "Owner Name" },
            { column: "contact_number", label: "Contact Number" },
            { column: "email", label: "Email" },
            { column: "business_permit_number", label: "Business Permit Number" },
            { column: "permit_issue_date", label: "Permit Issue Date" },
            { column: "permit_expiry_date", label: "Permit Expiry Date" },
            { column: "business_status", label: "Business Status" },
            { column: "registration_year", label: "Registration Year" },
            { column: "resident_id", label: "Resident ID" },
          ]}
          data={businesses}
          isLoading={false}
          addButton={{label: "Add Business", route: "/residents-and-households/register-business"}}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/edit-business/${item.id}`);
              },
            },
          ]}
        />
      </div>
    </Layout>
  );
};

export default EconomicActivities;