import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={'/'}>
      <h1 className="bg-gradient-to-r from-green-300 via-indigo-400 to-purple-800 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">Compass</h1>
    </Link>
  )
}
