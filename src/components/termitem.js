export function TermItem({term, definition}) {
  return (
    <div className="wordblock">
      <h4>{term}</h4>
      <p>{definition}</p>
    </div>
  )
}