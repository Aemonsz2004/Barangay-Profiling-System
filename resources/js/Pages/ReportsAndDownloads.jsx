import Layout from '@/Layouts/Layout'
import React from 'react'

const ReportsAndDownloads = ({title}) => {
  return (
    <Layout
    page_title={title}
    >
      <h2><strong>6. Reports & Downloads (Optional)</strong></h2>
    <ul>
    &nbsp;<li>Export population, employment, or business data in PDF/Excel</li>
    </ul>
    </Layout>
  )
}

export default ReportsAndDownloads