import { Route, Routes } from 'react-router-dom';
import './App.css';
import ConstantScreenAndComponents from './Constants/ConstantScreenAndComponents';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ConstantScreenAndComponents.HomePage />} />
        <Route path="/country/:code" element={<ConstantScreenAndComponents.CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
