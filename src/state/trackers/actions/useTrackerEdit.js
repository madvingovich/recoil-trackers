import { capitalize, find, set } from 'lodash'
import { useSetRecoilState } from 'recoil'
import { trackersState } from '../atoms'

export function useTrackerEdit() {
  const setTrackers = useSetRecoilState(trackersState)

  return (id, newTitle) =>
    setTrackers((trackers) => {
      set(find(trackers, { id }), 'title', capitalize(newTitle))
      return trackers
    })
}
