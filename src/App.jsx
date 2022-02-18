import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Exercise1 from './pages/Exercise1'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Exercise1 />} />
      </Routes>
    </Router>
  )
}

export default App
