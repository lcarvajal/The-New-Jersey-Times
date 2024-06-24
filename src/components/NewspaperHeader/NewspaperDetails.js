import React, { useState } from 'react';

export default function NewspaperDetails() {
  const [date, setDate] = useState(new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date()))

  return (
    <div className="NewspaperDetails">
      <p>
        {date}
        <br />
        Today's paper
      </p>
    </div>
  )
}