import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import TableClientSideBlog from '@/Components/TableClientSideBlog'
import { Inertia } from '@inertiajs/inertia'

const Resident = ({
  title,
  residents,


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


  </div>
    

    </ResidentLayout>
  )
}

export default Resident