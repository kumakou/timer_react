import React from "react"
import Typography from "@mui/material/Typography"

export default function TimerView({ time }: { time: number }) {
  //00:00:00のような形にするための時間変換関数
  const convertTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time - hours * 3600) / 60)
    const seconds = time - hours * 3600 - minutes * 60

    // hourを2桁にする
    const hoursStr = hours.toString().padStart(2, "0")
    // minutesを2桁にする
    const minutesStr = minutes.toString().padStart(2, "0")
    // secondsを2桁にする
    const secondsStr = seconds.toString().padStart(2, "0")

    return `${hoursStr}:${minutesStr}:${secondsStr}`
  }

  return (
    <div>
      <Typography variant="h5">{convertTime(time)}</Typography>
    </div>
  )
}
