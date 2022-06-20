import React from 'react'
import { useInputChange } from '../hooks/useInputChange'
import { useOnEnterEscape } from '../hooks/useOnEnterEscape'

export function TrackerTitle({ title, editing, setEditing, onEdit }) {
  const [editingTitle, setEditingTitle] = React.useState(title)
  const [isTitleHovered, setIsTitleHovered] = React.useState(false)
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    setEditingTitle(title)
  }, [title])

  const startEditing = () => {
    setEditing(true)
    setIsTitleHovered(false)
    setTimeout(() => {
      inputRef.current.focus()
      inputRef.current.setSelectionRange(0, 9999)
    }, 0)
  }

  const onInputChange = useInputChange(setEditingTitle)

  const onEnter = () => {
    onEdit(editingTitle)
    setEditing(false)
    inputRef.current.blur()
  }

  const onEscape = () => setEditing(false)

  const handleKeyDown = useOnEnterEscape(onEnter, onEscape)

  const onBlur = () => {
    setEditing(false)
    setEditingTitle(title)
  }

  return editing ? (
    <input
      className="px-2 py-1 rounded border"
      maxLength={50}
      ref={inputRef}
      value={editingTitle}
      onChange={onInputChange}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <p
      className="editable-title"
      onClick={startEditing}
      onMouseEnter={() => setIsTitleHovered(true)}
      onMouseLeave={() => setIsTitleHovered(false)}
    >
      {title}
      <span
        className={`edit-text ${isTitleHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {' '}
        [ edit ]
      </span>
    </p>
  )
}
