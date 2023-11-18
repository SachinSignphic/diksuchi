import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Architecture from './pages/Architecture';
import Interior from './pages/Interior';
import { useEffect } from 'react';
import useBlobity from 'blobity/lib/react/useBlobity';

function App() {
  const { pathname } = useLocation();
  const blobity = useBlobity({ zIndex: 100, opacity: 0.8, dotSize: 8, color: 'rgb(100, 100, 100)', dotColor: "rgb(180, 180, 180)", kineticMorphing: true, font: 'Glacial-Regular', fontColor: 'rgb(200, 200, 200)', tooltipPadding: 10, radius: 1 })

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/architecture" element={<Architecture />}></Route>
        <Route path="/interiors" element={<Interior />}></Route>
      </Routes>
    </>
  )
}

export default App
