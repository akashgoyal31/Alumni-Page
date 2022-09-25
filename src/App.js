
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alumni_2021 from './components/Alumni_2021';
import Alumni_2020 from './components/Alumni_2020';
import Alumni_2019 from './components/Alumni_2019';
import Alumni_2018 from './components/Alumni_2018';
import Alumni_2017 from './components/Alumni_2017';


function App() {
  return (
  <>
  <Router>

  <Navigation/>
  <Navbar/>
  <Routes>
  <Route exact path="/alumni_2021" element={<Alumni_2021/>} />
  <Route exact path="/alumni_2020" element={<Alumni_2020/>} />
  <Route exact path="/alumni_2019" element={<Alumni_2019/>} />
  <Route exact path="/alumni_2018" element={<Alumni_2018/>} />
  <Route exact path="/alumni_2017" element={<Alumni_2017/>} />
  </Routes>

  </Router>

  </>
  );
}

export default App;
