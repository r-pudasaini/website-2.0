import Home from './components/Home';
import Project from './components/Project';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
