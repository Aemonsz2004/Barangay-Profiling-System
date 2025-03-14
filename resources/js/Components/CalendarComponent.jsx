import { router } from "@inertiajs/react";
import React, { useState } from "react";

const CalendarComponent = ({ 
  initialDate = new Date(),
  events = [], // Expects events with { date, title, time }
  onDateClick,
  onEventClick,
  onAddEvent
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
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
    const firstDayOfWeek = firstDay.getDay() || 7;
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

    // Fill next month days until grid is complete
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

  // Filter events for a given date
  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
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
  
  // The view dropdown is hidden by adding the 'hidden' class
  // to the div with className="relative" at line 171

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const calendarDays = getMonthData(currentDate);

  return (
    <div className="lg:flex lg:h-full lg:flex-col ">
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
            className="border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative"
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-gray-300"></span>
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
          <div className="ml-6 h-6 w-px bg-gray-300"></div>
          <button 
            type="button" 
            onClick={onAddEvent || (() => router.visit('/events/create'))}
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
                  className={`relative px-3 py-2 ${day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500'} ${day.isToday ? 'font-semibold' : ''}`}
                  onClick={() => onDateClick && onDateClick(day.date)}
                >
                  <time 
                    dateTime={day.date.toISOString().split('T')[0]}
                    className={`${day.isToday ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white' : ''}`}
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
                            <p className="flex-auto truncate font-large  text-gray-900 hover:text-indigo-600 hover:opacity-60 bg-blue-200 my-1 rounded-lg p-1">
                              {event.title}
                            </p>
                            {event.time && (
                              <time className="ml-2 flex-none text-gray-500 group-hover:text-indigo-600">
                                {event.time}
                              </time>
                            )}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Mobile Calendar Grid */}
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
                    className={`ml-auto ${day.isToday ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white' : ''}`}
                  >
                    {day.date.getDate()}
                  </time>
                  {dayEvents.length > 0 && (
                    <div className="-mx-0.5 mt-auto flex flex-col truncate">
                      {dayEvents.map((event, i) => (
                        <div 
                          key={i}
                          className="mx-0.5 mb-1 truncate text-xs font-medium text-gray-600"
                        >
                          {event.title}
                          {event.time && ` (${event.time})`}
                        </div>
                      ))}
                    </div>
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