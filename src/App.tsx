import './App.css'
import { Routes, Route} from 'react-router-dom';
import {ROUTES} from './helpers/pathRouters';
import Navbar from './components/navbar/navbar';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        {/* //las rutas hay que parametrizarlas. Carpeta helpers, archivo RoutesPath, objeto ROUTES.HOME */}
        <Route path={ROUTES.HOME} element={<Notes />}></Route>
      </Routes>  
    </>
  )
}

export default App
