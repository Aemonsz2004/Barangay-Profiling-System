import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import TableClientSideBlog from '@/Components/TableClientSideBlog'


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
          loadingTag={<h1>Loading...</h1>}
        />


  </div>
    

    </ResidentLayout>
  )
}

export default Resident