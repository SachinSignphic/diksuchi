import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Interior from './pages/Interior';
import About from './pages/About';
import './App.css'
import useBlobity from 'blobity/lib/react/useBlobity';
import Gallery from './pages/Gallery';

function App() {
  const { pathname } = useLocation();
  const blobity = useBlobity({ zIndex: 9999, opacity: 0.8, dotSize: 8, color: 'rgb(180, 180, 180)', dotColor: "rgb(180, 180, 180)", kineticMorphing: true, font: 'Glacial-Regular', fontColor: 'rgb(100, 100, 100)',  mode: "slow", tooltipPadding: 12, radius: 1 })

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/architecture" element={<Architecture />}></Route>
        <Route path="/interiors" element={<Interior />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </>
  )
}

export default App
