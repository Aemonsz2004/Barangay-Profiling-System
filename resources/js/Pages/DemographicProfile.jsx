import Layout from '@/Layouts/Layout'
import React from 'react'

const DemographicProfile = ({title}) => {
  return (
    <Layout
      page_title={title}
    >
    
        <h2><strong>2. Demographic Profile</strong></h2>
    <ul>
    &nbsp;<li><strong>Population Size & Growth</strong>
            <ul>
                <li>Chart: Line Chart showing population growth over the years</li>
                <li>Table: Population count per year</li>
                <li>Filter: Dropdown to view stats by year</li>
            </ul>
        </li>
        &nbsp;<li><strong>Age Distribution</strong>
            <ul>
                <li>Chart: Horizontal Bar Chart with age groups</li>
                <li>Table: Age group breakdown</li>
            </ul>
        </li>
        &nbsp;<li><strong>Gender Ratio</strong>
            <ul>
                <li>Chart: Bar Chart (Male vs Female vs LGBTQ)</li>
                <li>Table: Gender population count</li>
            </ul>
        </li>
        &nbsp;<li><strong>Education Levels</strong>
            <ul>
                <li>Chart: Pie Chart showing education attainment</li>
                <li>Table: Education level breakdown per gender</li>
            </ul>
        </li>
        &nbsp;<li><strong>Occupation</strong>
            <ul>
                <li>Chart: Doughnut Chart or Bar Chart (Job sectors)</li>
                <li>Table: Occupation count per category</li>
            </ul>
        </li>
    </ul>
    </Layout>
  )
}

export default DemographicProfile