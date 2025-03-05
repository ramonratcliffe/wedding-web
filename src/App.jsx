import './styles.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Details } from './components/Details'; 
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Banks } from './components/Banks';
import { MoodBoard } from './components/MoodBoard' 
function App() {
  const { t } = useTranslation();

  return (
    <div className="App container">
      <Header /> 
        <div className="flex justify-center items-center min-h-svh relative"> 
          <img src="/src/assets/leaf.png" alt="leaf image" className="absolute inset-0 w-full h-4/6 object-cover" /> 
            <Link to="/details" className="relative mt-[-200px] py-6 px-8 bg-opacity-95 rounded-md shadow-md hover:bg-rose-100 transition duration-300" >
              {t('enter')}
            </Link>
        </div>
      <Footer />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <div className="flex justify-center items-center">
    <Suspense fallback="Loading" >
      <Router basename="/wedding-web/">
        <Routes>
          <Route path="" element={<App />} />
          <Route path="/details" element={<Details />} />
          <Route path="/banks" element={<Banks/>} />
          <Route path="/looks" element={<MoodBoard />} /> 
        </Routes>
      </Router>
    </Suspense>
    </div>
  );
}
