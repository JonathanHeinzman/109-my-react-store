import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center">
      <h1>Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>

      <Link to="/" className="btn btn-dark">Go Home</Link>
    </div>
  )
}

export default NotFound;