import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Camera } from 'lucide-react';
import { useState, useEffect } from 'react';
import Wedding from './pages/Weeding';
import Layout from './components/Layout';
import Maternity from './pages/Maternity';
import Birthday from './pages/Birthday';
import About from './pages/About';
import FAQ from './pages/FAQ';
import NewBornBaby from './pages/NewBornBaby';

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
  //       <div className="text-center relative">
  //         <div className="animate-float-camera absolute -top-16 left-1/2 transform -translate-x-1/2">
  //           <Camera className="w-16 h-16 text-white" />
  //         </div>
  //         <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x animate-float-text">
  //           Chitrasangam Studio
  //         </h1>
  //         <p className="text-white text-xl mt-4 opacity-0 animate-fade-in">
  //           Beyond Imagination
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/new-born-baby" element={<NewBornBaby />} />
          <Route path="/maternity" element={<Maternity />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;