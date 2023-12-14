import { Route, Routes } from 'react-router-dom';
import Header from'./Components/Header/Header'
import Home from './routes/Home/Home'
import About from './routes/About/About';
import Service from './routes/Service/Service';
import Contact from './routes/Contact/Contact';
import SignIn from './routes/SignIn/SignIn';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/Service' element={ <Service/>}/>
        <Route path='/contact' element={ <Contact/>}/>
       <Route path='/SignIn' element={<SignIn/>}/>
      </Routes>

      <Header/>
     
    </div>
  );
}

export default App;
