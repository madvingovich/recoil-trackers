import React from 'react'
import { getDuration } from '../state/trackers/utils/getDuration'

export function TrackerDuration({ time }) {
  const [duration, setDuration] = React.useState(getDuration(time))
  const intervalRef = React.useRef(null)

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDuration(getDuration(time))
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [time])

  return <p className="p-0 m-0">{duration}</p>
}
