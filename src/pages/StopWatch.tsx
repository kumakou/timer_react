import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import { Typography } from "@mui/material"
import TimerView from "../components/TimerView"

export default function StopWatch() {
  const [time, setTime] = useState(0)
  const [timerId, setTimerId] = useState<number | null>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (start) {
      setTimerId(
        setInterval(() => {
          setTime((prevTime) => prevTime + 1)
        }, 1000)
      )
    } else {
      timerId && clearInterval(timerId!)
    }
    return () => {
      timerId && clearInterval(timerId!)
    }
  }, [start])

  const addButtonListener = () => {
    setStart(!start)
  }

  const resetButtonListener = () => {
    setTime(0)
    setStart(false)
  }

  return (
    <div>
      <Header />
      <Typography variant="h5">StopWatch</Typography>
      <TimerView time={time} />
      <button onClick={addButtonListener}>Start/Stop</button>
      <button onClick={resetButtonListener}>Reset</button>
    </div>
  )
}
