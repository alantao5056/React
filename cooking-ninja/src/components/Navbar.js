import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar'

// hooks
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
