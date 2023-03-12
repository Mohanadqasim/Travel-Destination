import './App.css';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/city/:id" element={<CityInfo />} />  */}
      </Routes>
    </>
  );
}

export default App;
