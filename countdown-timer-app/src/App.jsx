import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isStart , setIsStart] = useState(false) ; 
  const [hrs , setHrs] =  useState(0)
  const [min , setMin] =  useState(0)
  const [sec , setSec] =  useState(0)
  const [timerId , setTimerId] = useState(0) ; 


  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌wrong tome decrement logic


  const runTimer = (sec , min , hrs , tid)=>{
    if(sec > 0)setSec(prev=>prev-1) ; 
    if (sec === 0 && min > 0){
      setMin(prev=>prev-1) ; 
      setSec(59) ; 
    }
    if(min === 0 && hrs > 0){
      setHrs(prev=>prev-1) ; 
      setMin(59) ; 
      // setSec(59)
    }
  }
  useEffect(()=>{
    let tid ; 
    if(isStart){
      
      tid = setInterval(() => {
         runTimer(sec , min , hrs , tid) ; 
      }, 1000);
      setTimerId(tid) ; 
    }
  },[isStart , hrs , min , sec])
  const handleReset = ()=>{
    setIsStart(prev=>!prev)
  }

  const handlestart = ()=>{
    setIsStart(prev=>!prev) ; 
  }

  const handlePause = ()=>{
    console.log('pause') ; 
  }
  const handleInput = (e)=>{
    const value = parseInt(e.target.value) ; 

    if(e.target.id === 'hours')setHrs(value) ; 
    if(e.target.id === 'minutes')setMin(value) ; 
    if(e.target.id === 'seconds')setSec(value) ; 

  }  
  return (
    <>
      <div className='App'>
        <h1>Countdown Timer</h1>
        {!isStart && (<SetTimerComponent onClick={handlestart} onChange = {handleInput}/>)}
        {isStart && (<TimerRunningComponent reset = {handleReset} pause = {handlePause} hours = {hrs} minutes = {min} seconds={sec}/>)}
      </div>
    </>
  )
}

function SetTimerComponent({onClick , onChange}){
  return (
      <div className='input-container'>
          <div className="input-box">
            <input type="text" onChange={onChange} id ="hours" placeholder='HH' />
            <input type="text" onChange={onChange} id ="minutes" placeholder='MM' />
            <input type="text" onChange={onChange} id ="seconds" placeholder='SS' />
          </div>
          <button onClick={onClick} className="timer-button">Start</button>
      </div>
  )
}
function TimerRunningComponent({reset , pause , hours , minutes , seconds}){
  return (
    <>
      <div className="timer-box">
        <div>
         {hours > 10 && hours}
         {hours < 10 && ("0"+String(hours))}
        </div>
        <span>:</span>
        <div>
            {minutes > 10 && minutes}
            {minutes < 10 && "0"+String(minutes)}
        </div>
        <span>:</span>
        <div>
            {seconds > 10 && seconds}
            {seconds < 10 && ("0"+String(seconds))}
        </div>
      </div>
      <div className='action-box'>
          <button onClick={pause} className="timer-button">Pause</button>
          <button onClick={reset} className="timer-button">Reset</button>
      </div>
    </>
  )
}
export default App
