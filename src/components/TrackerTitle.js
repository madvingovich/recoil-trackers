import React from 'react'
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

  const onEnter = () => {
    onEdit(editingTitle)
    setEditing(false)
    inputRef.current.blur()
  }

  const onEscape = () => {
    setEditing(false)
    setEditingTitle(title)
  }

  const handleKeyDown = useOnEnterEscape(onEnter, onEscape)

  return editing ? (
    <input
      ref={inputRef}
      value={editingTitle}
      onChange={(e) => setEditingTitle(e.target.value)}
      onBlur={() => setEditing(false)}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <p
      className="duration-100 font-semibold cursor-pointer px-2 py-1 rounded border border-white hover:border-gray-200"
      onClick={startEditing}
      onMouseEnter={() => setIsTitleHovered(true)}
      onMouseLeave={() => setIsTitleHovered(false)}
    >
      {title}
      <span
        className={`duration-100 font-thin text-gray-400 ${
          isTitleHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {' '}
        [ edit ]
      </span>
    </p>
  )
}
