import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import TableClientSideBlog from '@/Components/TableClientSideBlog'
import { router } from '@inertiajs/react'

const AllData = ({
  title,
  residents,
  businesses,
  communityEngagements,
  social_services,
  
}) => {
  

  return (
    <ResidentLayout title={title}>
      <div className='overflow-auto'>
        
        {/* Residents Table */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Residents Data</h2>
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
            actions={[
              {
                label: "Edit",
                handler: (item) => {
                  router.visit(`/residents-and-households/edit-resident/${item.id}`);
                },
              },
            ]}
          />
        </div>

        {/* Businesses Table */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Businesses Data</h2>
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
            ]}
            data={businesses}
            isLoading={false}
            addButton={{label: "Add Business", route: "/residents-and-households/register-business"}}
            actions={[
              {
                label: "Edit",
                handler: (item) => {
                  router.visit(`/residents-and-households/edit-business/${item.id}`);
                },
              },
            ]}
          />
        </div>

        {/* Social Services Table */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Social Services Data</h2>
          <TableClientSideBlog
            headers={[
              { column: 'id', label: 'ID' },
              { column: 'service_type', label: 'Service Type' },
              { column: 'name', label: 'Name' },
              { column: 'description', label: 'Description' },
              { column: 'contact', label: 'Contact' },
            ]}
            data={social_services}
            isLoading={false}
            addButton={{label: "Add Social Service", route: "/residents-and-households/add-social-service"}}
            actions={[
              {
                label: "Edit",
                handler: (item) => {
                  router.visit(`/residents-and-households/edit-social-service/${item.id}`);
                },
              },
            ]}
          />
        </div>

        {/* Community Engagements Table */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Community Engagements Data</h2>
          <TableClientSideBlog
            headers={[
              { column: 'id', label: 'ID' },
              { column: 'resident_id', label: 'Resident ID' },
              { column: 'title', label: 'Title' },
              { column: 'activity_type', label: 'Activity Type' },
              { column: 'description', label: 'Description' },
              { column: 'event_date', label: 'Event Date' },
              { column: 'time', label: 'Time' },
            ]}
            data={communityEngagements}
            isLoading={false}
            addButton={{label: "Add Community Engagement", route: "/residents-and-households/add-community-engagement"}}
            actions={[
              {
                label: "Edit",
                handler: (item) => {
                  router.visit(`/residents-and-households/edit-community-engagement/${item.id}`);
                },
              },
            ]}
          />
        </div>
      </div>
    </ResidentLayout>
  )
}

export default AllData;