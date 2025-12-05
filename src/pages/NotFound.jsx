import { Link } from 'react-router-dom'

import { IconMoodPuzzled } from '@tabler/icons-react';

function NotFound() {
  return (
    <div className="text-center">
      <IconMoodPuzzled size={80} stroke={2} />
      <h1>Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>

      <Link to="/" className="btn btn-dark">Go Home</Link>
    </div>
  )
}

export default NotFound;