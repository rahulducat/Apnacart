
import'./App.css'
import Header from './components/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Cards from "./components/Cards";
import CardsDetails from  './components/CardsDetails';
import Footer from './components/footer';
import Login from './components/Login';
export default function App() {
  return (
	<> 
<Header></Header>
{/* <Login/> */}
<Routes>

  <Route path='/' element={<Cards/>}/>
  <Route path='/cart/:id' element={<CardsDetails/>}/>
</Routes>
{/* <Footer/> */}

	</>
  )
}






