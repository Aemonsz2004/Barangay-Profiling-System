import Layout from '@/Layouts/Layout'
import React from 'react'

const EconomicActivities = ({title}) => {
  return (
  <Layout
  page_title={title}
  >
  
    <h2><strong>4. Economic Activities</strong></h2>
    <ul>
    &nbsp;<li><strong>Businesses & Industries</strong>
            <ul>
                <li>Chart: Pie Chart of business types</li>
                <li>Table: List of businesses with type and registration date</li>
            </ul>
        </li>
        &nbsp;<li><strong>Employment Rates</strong>
            <ul>
                <li>Chart: Line Chart showing employment trends over time</li>
                <li>Table: Unemployment rate per year</li>
            </ul>
        </li>
    </ul>
  </Layout>  )
}

export default EconomicActivities