import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { About, Home, Dashbord, SignIn, SignUp, Projects } from './pages';
import Header from './Component/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/dashbord' element={<Dashbord />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App