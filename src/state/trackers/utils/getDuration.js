import { formatDuration } from 'date-fns'

export function getDuration(time) {
  const duration = Date.now() - time
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  const days = Math.floor((duration / (1000 * 60 * 60)) * 24)

  return formatDuration({
    days,
    hours,
    minutes,
    seconds: seconds || '00',
  })
}
