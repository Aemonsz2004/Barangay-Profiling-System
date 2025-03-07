import { router } from "@inertiajs/react";
import React, { useState } from "react";

const CalendarComponent = ({ 
  initialDate = new Date(),
  events = [], // expect events to be an array with { activity_type, description, event_date, ... }
  onDateClick,
  onEventClick,
  onAddEvent // Optional, if provided, will be called when "Add event" is clicked
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewDropdownOpen, setViewDropdownOpen] = useState(false);
  const [currentView, setCurrentView] = useState('month');

  // Helper: Format month/year string
  const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  // Helper: Check if a given date is today
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Helper: Build calendar grid (42 cells)
  const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Fill previous month days for first week
    const firstDayOfWeek = firstDay.getDay() || 7; // Sunday as 7
    const prevMonthDays = Array.from({ length: firstDayOfWeek - 1 }, (_, i) => {
      const day = new Date(year, month, -i);
      return { 
        date: day, 
        isCurrentMonth: false 
      };
    }).reverse();

    // Days for current month
    const currentMonthDays = Array.from({ length: lastDay.getDate() }, (_, i) => {
      const day = new Date(year, month, i + 1);
      return { 
        date: day, 
        isCurrentMonth: true,
        isToday: isToday(day)
      };
    });

    // Fill next month days until grid is complete (42 cells)
    const daysNeeded = 42 - (prevMonthDays.length + currentMonthDays.length);
    const nextMonthDays = Array.from({ length: daysNeeded }, (_, i) => {
      const day = new Date(year, month + 1, i + 1);
      return { 
        date: day, 
        isCurrentMonth: false 
      };
    });

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  // Filter events that occur on a given date
  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.event_date);
      return date.getDate() === eventDate.getDate() &&
             date.getMonth() === eventDate.getMonth() &&
             date.getFullYear() === eventDate.getFullYear();
    });
  };

  // Navigation handlers
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const calendarDays = getMonthData(currentDate);

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <time dateTime={currentDate.toISOString().substring(0, 7)}>
            {formatMonth(currentDate)}
          </time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button 
              type="button" 
              onClick={handlePrevMonth}
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              type="button" 
              onClick={handleToday} 
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button 
              type="button" 
              onClick={handleNextMonth}
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="relative">
              <button 
                type="button" 
                onClick={() => setViewDropdownOpen(!viewDropdownOpen)}
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
                id="menu-button" 
                aria-expanded={viewDropdownOpen} 
                aria-haspopup="true"
              >
                {currentView.charAt(0).toUpperCase() + currentView.slice(1)} view
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {viewDropdownOpen && (
                <div className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="none">
                    {['day', 'week', 'month', 'year'].map((view) => (
                      <a 
                        key={view}
                        href="#" 
                        className={`${currentView === view ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
                        role="menuitem" 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentView(view);
                          setViewDropdownOpen(false);
                        }}
                      >
                        {view.charAt(0).toUpperCase() + view.slice(1)} view
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="ml-6 h-6 w-px bg-gray-300"></div>
            <button 
              type="button" 
              onClick={() => {
                if (onAddEvent) {
                  // Use the provided onAddEvent function or fall back to default routing
                  onAddEvent();
                } else {
                  router.visit('/your-default-add-event-route');
                }
              }}
              className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Add event
            </button>
          </div>
        </div>
      </header>
      
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          {daysOfWeek.map((day, i) => (
            <div key={i} className="flex justify-center bg-white py-2">
              <span>{day.charAt(0)}</span>
              <span className="sr-only sm:not-sr-only">{day.substring(1)}</span>
            </div>
          ))}
        </div>
        
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          {/* Desktop Calendar Grid */}
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {calendarDays.map((day, index) => {
              const dayEvents = getEventsForDate(day.date);
              return (
                <div 
                  key={index} 
                  className={`relative px-3 py-2 ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500'}`}
                  onClick={() => onDateClick && onDateClick(day.date)}
                >
                  <time 
                    dateTime={day.date.toISOString().split('T')[0]}
                    className={day.isToday ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white' : ''}
                  >
                    {day.date.getDate()}
                  </time>
                  
                  {dayEvents.length > 0 && (
                    <ol className="mt-2">
                      {dayEvents.map((event, eventIndex) => (
                        <li key={eventIndex}>
                          <a 
                            href="#" 
                            className="group flex"
                            onClick={(e) => {
                              e.preventDefault();
                              onEventClick && onEventClick(event);
                            }}
                          >
                            <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                              {event.description || event.activity_type}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Mobile view calendar grid */}
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {calendarDays.map((day, index) => {
              const dayEvents = getEventsForDate(day.date);
              return (
                <button 
                  key={index}
                  type="button" 
                  className={`flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10 ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'} ${day.isToday ? 'font-semibold text-indigo-600' : day.isCurrentMonth ? 'text-gray-900' : 'text-gray-500'}`}
                  onClick={() => onDateClick && onDateClick(day.date)}
                >
                  <time 
                    dateTime={day.date.toISOString().split('T')[0]} 
                    className={`ml-auto ${selectedDate && day.date.toDateString() === selectedDate.toDateString() ? 'flex h-6 w-6 items-center justify-center rounded-full bg-gray-900' : ''}`}
                  >
                    {day.date.getDate()}
                  </time>
                  <span className="sr-only">{dayEvents.length} events</span>
                  {dayEvents.length > 0 && (
                    <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                      {dayEvents.map((_, i) => (
                        <span key={i} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                      ))}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
