import CalendarComponent from '@/Components/CalendarComponent'
import Layout from '@/Layouts/Layout'
import React from 'react'

const CommunityEngagement = ({
  title,
  communityEngagements,
  calendarEvents,
}) => {

  const handleAddEvent = () => {
    Inertia.visit(route('add-event'));
  };

  const handleEventClick = (event) => {
    Inertia.visit(`/residents-and-households/edit-community-engagement/${event.id}`);
  }

  console.log(calendarEvents);

  return (
    <Layout
    page_title={title}
    >

    <div className=' w-full h-full my-10 min-h-[1000px]'>
          <CalendarComponent
          events={calendarEvents}
          onEventClick={  handleEventClick}
          onAddEvent={ handleAddEvent}
        />
      </div>
    
    

    </Layout>
  )
}

export default CommunityEngagement