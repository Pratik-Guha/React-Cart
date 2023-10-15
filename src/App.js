import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Header,Home} from './components'
import {Toaster} from 'react-hot-toast'
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Toaster/>
   </BrowserRouter>
  );
}

export default App;
