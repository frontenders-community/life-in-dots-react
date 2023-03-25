import { useEffect, useState } from 'react'
import './App.css'
import Dots from './components/Dots';

function App() {
  const [birthDate, setBirthDate] = useState("1991-10-09");
  const [elapsedTime, setElapsedTime] = useState(0);
  
  useEffect(() => {
    const today = new Date().getTime();
    const bDate = new Date(birthDate).getTime();
    setElapsedTime((today-bDate)/1000);
  }, [birthDate]);

  return (
    <div className="container">
      <h1 className="title">Your Life in Dots</h1>
      <input
        type="date"
        name="birthDate"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      { !isNaN(elapsedTime) && <Dots elapsedTime={elapsedTime} /> }
    </div>
  )
}

export default App
