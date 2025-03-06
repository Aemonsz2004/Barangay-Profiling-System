import CalendarComponent from '@/Components/CalendarComponent'
import Layout from '@/Layouts/Layout'
import React from 'react'

const CommunityEngagement = ({
  title
}) => {

  return (
    <Layout
    page_title={title}
    >

    <CalendarComponent/>
    
    

    </Layout>
  )
}

export default CommunityEngagement