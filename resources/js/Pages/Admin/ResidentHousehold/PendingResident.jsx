import ResidentLayout from '@/Layouts/ResidentLayout'
import TableClientSideBlog from '@/Components/TableClientSideBlog'
import React from 'react'
import { router } from '@inertiajs/react'

const PendingResident = ({
  title,
  pendingResidents,

}) => {
  return (
    <ResidentLayout
    title={title}
    >
    
    <TableClientSideBlog
      headers={[
                  { label: "Full Name", column: "first_name + ' ' + middle_name + ' ' + last_name" },
                  { label: "Last Name", column: "last_name" },
                  { label: "Email", column: "email_address" },
                  { label: "Status", column: "status" }
              ]}
              data={pendingResidents}
              isLoading={false}
              actions={[
                  {
                      label: "Approve",
                      handler: (resident) =>
                          router.visit(route("resident.approve", { id: resident.id })),
                  },
                  {
                      label: "Reject",
                      handler: (resident) =>
                          router.visit(route("resident.reject", { id: resident.id })),
                  },
              ]}
    />

    </ResidentLayout>
  )
}

export default PendingResident