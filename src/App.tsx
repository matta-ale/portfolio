import './App.css'
import { Routes, Route} from 'react-router-dom';
import {ROUTES} from './helpers/pathRouters';
import { Home } from './views/home/Home';
import Footer from './components/Footer/Footer';
import ProjectPage from './views/ProjectPage.tsx/ProjectPage';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Navbar from './components/navbar/Navbar';
function App() {

  return (
    <div className='w-full full-height bg-gray-100'>
      <Navbar/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}></Route>
        <Route path={ROUTES.ABOUT} element={<About/>}></Route>
        <Route path={ROUTES.PROJECTS} element={<ProjectPage/>}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact/>}></Route>
      </Routes> 
      <Footer/> 
    </div>
  )
}

export default App
