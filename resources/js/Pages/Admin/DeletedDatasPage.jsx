import TableClientSideBlog from '@/Components/TableClientSideBlog'
import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'

const DeletedDatasPage = ({
  title,

  deleted_residents,
  deleted_businesses,
  deleted_social_services,
  deleted_economic_activities,
  deleted_community_engagements,

}) => {
  return (
    
    
    <ResidentLayout
    title={title}
    >
    
    <TableClientSideBlog
          headers={[
            { column: 'id', label: 'ID' },
            { column: 'full_name', label: 'Full Name' },
            { column: 'age', label: 'Age' },
            { column: 'birthdate', label: 'Birthdate' },
            { column: 'gender', label: 'Gender' },
            { column: 'civil_status', label: 'Civil Status' },
            { column: 'education_level', label: 'Education Level' },
            { column: 'occupation', label: 'Occupation' },
            { column: 'registration_year', label: 'Registration Year' },
            { column: 'deleted_at', label: 'Deleted At' },
          ]}
          data={deleted_residents}
          isLoading={false}
          actions={[
            {
              label: "Retrieve",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/resident/${item.id}/edit`);
              }
            },
          ]}
        />

<TableClientSideBlog
          headers={[
            { column: 'id', label: 'ID' },
            { column: 'business_name', label: 'Business Name' },
            { column: 'business_address', label: 'Business Address' },
            { column: 'business_type', label: 'Business Type' },
            { column: 'owner_name', label: 'Owner Name' },
            { column: 'contact_number', label: 'Contact Number' },
            { column: 'email', label: 'Email' },
            { column: 'business_permit_number', label: 'Permit Number' },
            { column: 'permit_issue_date', label: 'Permit Issue Date' },
            { column: 'permit_expiry_date', label: 'Permit Expiry Date' },
            { column: 'business_status', label: 'Status' },
            { column: 'registration_year', label: 'Registration Year' },
            { column: 'resident_id', label: 'Resident ID' },
    { column: 'deleted_at', label: 'Deleted At' },
          ]}
          data={deleted_businesses}
          isLoading={false}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/resident/${item.id}/edit`);
              }
            },
          ]}
        />

<TableClientSideBlog
          headers={[
            { column: 'id', label: 'ID' },
            { column: 'resident_id', label: 'Resident ID' },
            { column: 'title', label: 'Title' },
            { column: 'activity_type', label: 'Activity Type' },
            { column: 'description', label: 'Description' },
            { column: 'event_date', label: 'Event Date' },
            { column: 'time', label: 'Time' },
            { column: 'deleted_at', label: 'Deleted At' },
            { column: 'deleted_at', label: 'Deleted At' },
          ]}
          data={deleted_community_engagements}
          isLoading={false}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/resident/${item.id}/edit`);
              }
            },
          ]}
        />

<TableClientSideBlog
          headers={[
            { column: 'id', label: 'ID' },
            { column: 'service_type', label: 'Service Type' },
            { column: 'name', label: 'Name' },
            { column: 'description', label: 'Description' },
            { column: 'contact', label: 'Contact' },
            { column: 'deleted_at', label: 'Deleted At' },
          ]}
          data={deleted_social_services}
          isLoading={false}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/resident/${item.id}/edit`);
              }
            },
          ]}
        />

<TableClientSideBlog
          headers={[
            { column: 'id', label: 'ID' },
            { column: 'resident_id', label: 'Resident ID' },
            { column: 'title', label: 'Title' },
            { column: 'activity_type', label: 'Activity Type' },
            { column: 'description', label: 'Description' },
            { column: 'event_date', label: 'Event Date' },
            { column: 'time', label: 'Time' },
            { column: 'deleted_at', label: 'Deleted At' },
          ]}
          data={deleted_social_services}
          isLoading={false}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/resident/${item.id}/edit`);
              }
            },
          ]}
        />

<TableClientSideBlog
          headers={[
            { column: 'id', label: 'ID' },
            { column: 'business_name', label: 'Business Name' },
            { column: 'business_type', label: 'Business Type' },
            { column: 'owner_name', label: 'Owner Name' },
            { column: 'address', label: 'Address' },
            { column: 'contact_number', label: 'Contact Number' },
            { column: 'email_address', label: 'Email Address' },
            { column: 'business_permit', label: 'Business Permit' },
            { column: 'number_of_employees', label: 'No. of Employees' },
            { column: 'gross_annual_income', label: 'Gross Annual Income' },
            { column: 'date_established', label: 'Date Established' },
            { column: 'description', label: 'Description' },
            { column: 'deleted_at', label: 'Deleted At' },
          ]}
          data={deleted_economic_activities}
          isLoading={false}
          actions={[
            {
              label: "Edit",
              handler: (item) => {
                Inertia.visit(`/residents-and-households/resident/${item.id}/edit`);
              }
            },
          ]}
        />

    </ResidentLayout>
  )
}

export default DeletedDatasPage