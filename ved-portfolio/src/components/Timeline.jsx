import React from 'react';
import './Timeline.css';

function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <h4>{event.title}</h4>
          <span>{event.date}</span>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
