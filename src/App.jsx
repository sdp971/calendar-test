import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

import './App.css';


function App() {
  const [value, onChange] = useState(new Date())



  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType='islamic'
        activeStartDate={new Date(2024, 0, 1)}
        view='month'
        locale='fr'
        selectRange
        showWeekNumbers
      />
    </div>
  );
}

export default App;
