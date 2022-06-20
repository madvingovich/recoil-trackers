import { concat } from 'lodash'
import { useSetRecoilState } from 'recoil'
import { trackersState } from '../atoms'
import { createTracker } from '../utils/createTracker'

export function useCreateTracker() {
  const setTrackers = useSetRecoilState(trackersState)
  return (title) =>
    setTrackers((prevTrackers) => concat(prevTrackers, createTracker(title)))
}
