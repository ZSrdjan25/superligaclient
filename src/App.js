import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './shared/components/home/Home';
import Header from './shared/layout/header/Header';
import Footer from './shared/layout/footer/Footer';
import AboutUs from './modules/aboutUs/AboutUs';
import Table from './modules/table/Table';
import Match from './modules/match/Match';

function App() {

  let classes =
  "bg-white min-h-screen rounded-mainLayoutRadius p-mainLayoutPadding relative ";

  return(
    
   <>
    <div className="main bg-primary-background min-h-screen">
      <div className="lg:container md:container sm:container small:container mx-auto">
      
        <BrowserRouter>
        <Header/>
        <div className={classes}>
         
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/o-nama" element={<AboutUs/>}/>
                  <Route path="/tabela" element={<Table/>}/>
                  <Route path='/rezultati' element={<Match/>}/>
              </Routes>
              </div>
          </BrowserRouter>
      
      </div>
      
    </div>
    <Footer/>
    </>
  
)}

export default App;
