import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import ArchitectureList from './components/ArchitectureList/ArchitectureList';  // Architecture list page
import ArchitectureGallery from './components/ArchitectureGallery/ArchitectureGallery';  // Individual project page
import Interior from './pages/Interior';
import About from './pages/About';
import './App.css'
import useBlobity from 'blobity/lib/react/useBlobity';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
function App() {
  const { pathname } = useLocation();
  const blobity = useBlobity({ zIndex: 9999, opacity: 0.8, dotSize: 8, color: 'rgb(180, 180, 180)', dotColor: "rgb(180, 180, 180)", kineticMorphing: true, font: 'Glacial-Regular', fontColor: 'rgb(100, 100, 100)',  mode: "slow", tooltipPadding: 12, radius: 1 })

  return (
    // (navigator.userAgent.match(/Android/i)
    //   || navigator.userAgent.match(/webOS/i)
    //   || navigator.userAgent.match(/iPhone/i)
    //   || navigator.userAgent.match(/iPad/i)
    //   || navigator.userAgent.match(/iPod/i)
    //   || navigator.userAgent.match(/BlackBerry/i)
    //   || navigator.userAgent.match(/Windows Phone/i)) ? 
    //   <>
    //     <h1 className='font-glacial-r' style={{color: "white"}}>Site is under construction!</h1>
    //   </>
    //   :
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/architecture/:slug" element={<ArchitectureGallery type="architecture"/>} />
          <Route path="/interiors" element={<Interior />}></Route>
          <Route path="/interiors/:slug" element={<ArchitectureGallery type="interior"/>} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/ourstudio" element={<Gallery />}></Route>
        </Routes>
      </>
  )
}

export default App
