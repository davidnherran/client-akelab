import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Exercise1 from './pages/Exercise1'
import Exercise2 from './pages/Exercise2'
import Exercise3 from './pages/Exercise3'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Exercise1 />} />
        <Route path='/exercise1' element={<Exercise1 />} />
        <Route path='/exercise2' element={<Exercise2 />} />
        <Route path='/exercise3' element={<Exercise3 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
