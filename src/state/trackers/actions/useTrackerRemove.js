import { useSetRecoilState } from 'recoil'
import { trackersState } from '../atoms'

export function useTrackerRemove() {
  const setTrackers = useSetRecoilState(trackersState)
  return (id) => setTrackers((trackers) => trackers.filter((t) => t.id !== id))
}
