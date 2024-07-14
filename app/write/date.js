'use client'

import { useState, useEffect } from 'react'

export default function WriteDate() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate)
  }, []);

  return (
    <input value={currentDate} />
  )
}