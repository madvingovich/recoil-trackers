import React from 'react'
import { useInputChange } from '../hooks/useInputChange'
import { useOnEnterEscape } from '../hooks/useOnEnterEscape'

export function TrackerCreator({ onCreate, className = '' }) {
  const [title, setTitle] = React.useState('')

  const handleCreate = () => {
    onCreate(title)
    setTitle('')
  }

  const handleKeyDown = useOnEnterEscape(handleCreate)
  const handleTitleChange = useInputChange(setTitle)

  return (
    <div className={`flex justify-center ${className}`}>
      <input
        className="input mr-3"
        placeholder="Do Something..."
        value={title}
        onChange={handleTitleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  )
}
