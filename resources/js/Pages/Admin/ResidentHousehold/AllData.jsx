import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import TableClientSideBlog from '@/Components/TableClientSideBlog'
import { Inertia } from '@inertiajs/inertia'

const AllData = ({
  title,
  residents,
  businesses,
  communityEngagements,
  social_services,


}) => {
  
  return (
    <ResidentLayout
    title={title}
    >
    
    
  <div className=' overflow-auto'>

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
  addButton={{label: "Add Resident", route: "/residents-and-households/register-resident"}}
    actions={[ //return an empty array if no actions are needed
      {
        label: "Edit",
        handler: (item) => {
          Inertia.visit(`/resident/${item.id}/edit`);
        },
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
  data={businesses}
  isLoading={false}
  addButton={{label: "Add Resident", route: "/residents-and-households/register-resident"}}
    actions={[ //return an empty array if no actions are needed
      {
        label: "Edit",
        handler: (item) => {
          Inertia.visit(`/resident/${item.id}/edit`);
        },
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
  data={social_services}
  isLoading={false}
  addButton={{label: "Add Resident", route: "/residents-and-households/register-resident"}}
    actions={[ //return an empty array if no actions are needed
      {
        label: "Edit",
        handler: (item) => {
          Inertia.visit(`/resident/${item.id}/edit`);
        },
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
  data={communityEngagements}
  isLoading={false}
  addButton={{label: "Add Resident", route: "/residents-and-households/register-resident"}}
    actions={[ //return an empty array if no actions are needed
      {
        label: "Edit",
        handler: (item) => {
          Inertia.visit(`/resident/${item.id}/edit`);
        },
      },
    ]}
    />


  </div>
    

    </ResidentLayout>
  )
}

export default AllData;