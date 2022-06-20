import { capitalize, map } from 'lodash'
import { useSetRecoilState } from 'recoil'
import { trackersState } from '../atoms'

export function useTrackerEdit() {
  const setTrackers = useSetRecoilState(trackersState)

  return (id, newTitle) =>
    setTrackers((trackers) =>
      map(trackers, (tracker) => {
        if (tracker.id === id) {
          return {
            ...tracker,
            title: capitalize(newTitle),
          }
        }
        return tracker
      }),
    )
}
