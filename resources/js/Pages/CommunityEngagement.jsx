import Layout from '@/Layouts/Layout'
import React from 'react'

const CommunityEngagement = ({title}) => {
  return (
    
    <Layout
    page_title={title}>
      <h2><strong>5. Community Engagement</strong></h2>
    <ul>
    &nbsp;<li><strong>Resident Participation</strong>
            <ul>
                <li>Chart: Pie Chart showing community participation</li>
                <li>Table: List of active community-driven projects</li>
            </ul>
        </li>
        &nbsp;<li><strong>Feedback System (Optional)</strong>
            <ul>
                <li>Form: Residents can submit feedback on local programs</li>
            </ul>
        </li>
    </ul>
    </Layout>
  )
}

export default CommunityEngagement