import { useRecoilValue } from 'recoil'
import { trackersState } from '../state/trackers/atoms'
import { useCreateTracker } from '../state/trackers/actions/useCreateTracker'
import { TrackerCreator } from './TrackerCreator'
import { Tracker } from './Tracker'
import { useTrackerRemove } from '../state/trackers/actions/useTrackerRemove'
import { useTrackerEdit } from '../state/trackers/actions/useTrackerEdit'

export function TrackersContainer() {
  const trackers = useRecoilValue(trackersState)
  const onTrackerCreate = useCreateTracker()
  const onTrackerRemove = useTrackerRemove()
  const onTrackerEdit = useTrackerEdit()

  return (
    <>
      <TrackerCreator className="py-5" onCreate={onTrackerCreate} />
      {trackers.map((t) => (
        <Tracker
          key={t.id}
          tracker={t}
          onRemove={onTrackerRemove}
          onEdit={onTrackerEdit}
        />
      ))}
    </>
  )
}
