import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthPage as Auth } from 'pages/Auth'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
