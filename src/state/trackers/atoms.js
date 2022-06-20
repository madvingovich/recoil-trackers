import { atom } from 'recoil'
import { TRACKERS_KEY } from './constants'
import { trackersService } from './utils/trackersService'

export const trackersState = atom({
  key: TRACKERS_KEY,
  default: trackersService.get(), // [{ id, title, time }]
  dangerouslyAllowMutability: true,
  effects: [({ onSet }) => onSet(trackersService.set)],
})
