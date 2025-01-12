import './App.css'
import Navbar from './components/navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Post from './pages/post';

const App = () => {
  return ( 
    <>
      <Navbar />
      <div className='container-for-all-the-data-inside-the-page'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Post' element={<Post/>}/>
        </Routes>
      </div>
    </>
   );
}
 
export default App;
