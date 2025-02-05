import Layout from '@/Layouts/Layout'
import React from 'react'

const SocialServices = ({title}) => {
  return (
    <Layout
    page_title={title}
    >
      <h2><strong>3. Social Services</strong></h2>
    <ul>
    &nbsp;<li><strong>Healthcare Services</strong>
            <ul>
                <li>Chart: Bar Chart of healthcare facilities per area</li>
                <li>Table: List of available hospitals, clinics, and services</li>
            </ul>
        </li>
        &nbsp;<li><strong>Education Services</strong>
            <ul>
                <li>Chart: Bar Chart of schools per education level</li>
                <li>Table: List of schools with student population</li>
            </ul>
        </li>
        &nbsp;<li><strong>Social Welfare Programs</strong>
            <ul>
                <li>Chart: Pie Chart showing participation in programs</li>
                <li>Table: Program details and number of beneficiaries</li>
            </ul>
        </li>
    </ul>
    </Layout>
  )
}

export default SocialServices