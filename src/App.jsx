
import './App.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Privacy } from './pages/privacy'
import { Term } from './pages/Term'
function App() {
 return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:slug' element={<Detail/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/terms' element={<Term/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
 )
}

export default App
