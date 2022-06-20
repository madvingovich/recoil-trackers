import React from 'react'
import { RemoveTracker } from './RemoveTracker'
import { TrackerDuration } from './TrackerDuration'
import { TrackerTitle } from './TrackerTitle'

export function Tracker({ tracker, onRemove, onEdit }) {
  const [editing, setEditing] = React.useState(false)

  const editTrackerTitle = (newTitle) => onEdit(tracker.id, newTitle)
  const removeTracker = () => onRemove(tracker.id)

  return (
    <div className="flex items-center justify-between px-4 py-5 mb-4 bg-white shadow rounded-md ">
      <TrackerTitle
        title={tracker.title}
        editing={editing}
        setEditing={setEditing}
        onEdit={editTrackerTitle}
      />
      <TrackerDuration time={tracker.time} />
      <RemoveTracker onRemove={removeTracker} />
    </div>
  )
}
