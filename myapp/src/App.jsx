import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Post from './pages/post';
import Mainlayout from './layouts/MainLayout';

const App = () => {
  return ( 
    <>
      <Mainlayout>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Post' element={<Post/>}/>
        </Routes>
      </div>
      </Mainlayout>
    </>
   );
}
 
export default App;
