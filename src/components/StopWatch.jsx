import React, { useState } from 'react'

const StopWatch = () => {
  const [timerId, setTimerId] = useState (null);
  const [watch, setWatch] =useState(0);

    const start =() =>{

      if (!timerId)
      {
        let id =setInterval (() => {
          setWatch ((prev) => prev + 1);
        }, 1000);
        setTimerId(id)
      }
      
    };

    const reset =() => {
      clearInterval(timerId);
      setWatch(0);
      setTimerId(null)
    };

    const pause = () =>{
      clearInterval(timerId);
      setTimerId(null)
    };

  return (
    <div>
        <h1>StopWatch :</h1>
        <h1>{watch}</h1>

        <div> 
        <button onClick={start}>Start</button>
        <button onClick={reset}>reset</button>
        <button onClick={pause}>Pause</button>
        </div>
       
    </div>
  )
}

export default StopWatch