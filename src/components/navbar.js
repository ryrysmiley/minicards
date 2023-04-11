import { Outlet, Link } from "react-router-dom"

export function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">MiniCards</Link>
        </li>
        <li>
          <Link to="/Flashcards">Flashcards</Link>
        </li>
        <li>
          <Link to="/Matching">Matching</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}