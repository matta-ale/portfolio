import './App.css'
import { Routes, Route} from 'react-router-dom';
import {ROUTES} from './helpers/pathRouters';
import Navbar from './components/Navbar/Navbar';
import { Home } from './views/home/Home';
function App() {

  return (
    <div className='w-full full-height bg-gray-100'>
      <Navbar/>
      <Routes>
        {/* //las rutas hay que parametrizarlas. Carpeta helpers, archivo RoutesPath, objeto ROUTES.HOME */}
        <Route path={ROUTES.HOME} element={<Home/>}></Route>
      </Routes>  
    </div>
  )
}

export default App
