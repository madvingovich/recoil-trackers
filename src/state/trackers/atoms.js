import { atom } from 'recoil'

export const trackersState = atom({
  key: 'Trackers',
  default: [
    {
      id: 1,
      title: 'Test One',
      time: Date.now() - 1000000,
    },
  ],
})

// [{ id, title, time }]
