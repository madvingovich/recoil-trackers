import { capitalize } from 'lodash'

export function createTracker(title = '') {
  const creationTime = Date.now()
  return {
    id: creationTime,
    title: capitalize(title),
    time: creationTime,
  }
}
