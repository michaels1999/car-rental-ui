import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CarBrands from './component/CarBrands';
import CarMakes from './component/CarMakes';
import Cars from './component/Cars';

class App extends Component {
  render() {
    return(
      <div>
      <div>
        <Link to={"/car-brands"}>Car brands</Link>
        <Link to={"/car-makes"}>Car makes</Link>
        <Link to={"/cars"}>Cars</Link>
      </div>
        <div>
          <Routes>
              <Route path="/car-brands" element={<CarBrands/>} />
              <Route path="/car-makes" element={<CarMakes/>} />
              <Route path="/cars" element={<Cars/>} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
