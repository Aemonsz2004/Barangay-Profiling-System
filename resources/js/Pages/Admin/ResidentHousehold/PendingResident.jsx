import ResidentLayout from '@/Layouts/ResidentLayout'
import TableClientSideBlog from '@/Components/TableClientSideBlog'
import React from 'react'
import { router } from '@inertiajs/react'

const PendingResident = ({
  title,
  pendingResidents,

}) => {

const approve = (id) => {
  router.post(`/admin/pending-residents/${id}/approve`)
}

const reject = (id) => {
  router.post(`/admin/pending-residents/${id}/reject`)
}

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
                      handler:(resident)=> approve(resident.id)
                  },
                  {
                      label: "Reject",
                      handler:(resident)=> reject(resident.id)

                  },
              ]}
    />

    </ResidentLayout>
  )
}

export default PendingResident