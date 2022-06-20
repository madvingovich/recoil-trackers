export function useOnEnterEscape(enterHander, escapeHandler) {
  return (e) => {
    if (enterHander && (e.key === 'Enter' || e.which === 13)) {
      enterHander()
    } else if (escapeHandler && (e.key === 'Escape' || e.which === 27)) {
      escapeHandler()
    }
  }
}
