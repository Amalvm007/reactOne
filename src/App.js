import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import HotelView from './components/HotelView'

function App() {
  return (
    <div className="App">
      <Header/>
       
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/view/:id' element={ <HotelView/> } />
      </Routes>
     

      

      <Footer/>


      
      
    </div>
  );
}

export default App;
