import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import TimerView from "../components/TimerView"
import { Typography } from "@mui/material"

export default function Timer() {
  const [timer, setTimer] = useState(0)
  const [start, setStart] = useState(false)
  const [timerId, setTimerId] = useState<number | null>(null)

  // timeを1秒ごとに減らす,0になったら止める
  useEffect(() => {
    if (start) {
      setTimerId(
        setInterval(() => {
          setTimer((prevTime) => {
            if (prevTime === 0) {
              clearInterval(timerId!)
              return 0
            }
            return prevTime - 1
          })
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

  const addTime = (time: number) => {
    setTimer((timer) => timer + time)
  }

  const minTime = (time: number) => {
    setTimer((timer) => timer - time)
  }

  const resetTime = () => {
    setTimer(0)
  }

  return (
    <div>
      <Header />
      <Typography variant="h5">Timer</Typography>
      <TimerView time={timer} />
      <button onClick={addButtonListener} disabled={timer ? undefined : true}>
        start / stop
      </button>
      <button
        onClick={() => {
          addTime(60)
        }}
      >
        +1min
      </button>
      <button
        disabled={timer >= 60 ? undefined : true}
        onClick={() => {
          minTime(60)
        }}
      >
        -1min
      </button>
      <button
        onClick={() => {
          addTime(1)
        }}
      >
        +1sec
      </button>
      <button
        disabled={timer ? undefined : true}
        onClick={() => {
          minTime(1)
        }}
      >
        -1sec
      </button>
      <button
        onClick={() => {
          resetTime()
        }}
      >
        reset
      </button>
    </div>
  )
}
