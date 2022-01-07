import './App.css';
import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
//import HomePage from './pages/homepage/homepage.component';
import Womens from './pages/category/women.component';
import Mens from './pages/category/men.component';
import Sneakers from './pages/category/Sneakers.component';
import HeaderSection from './component/header/header.component';

export class App extends PureComponent {
  render(){
    return(
      <div>
        <HeaderSection />
        <Routes>
        <Route  exact path='/' element ={<Womens/>}/>
        <Route  exact path='/Men' element ={<Mens/>}/>
        <Route  exact path='/Sneakers' element ={<Sneakers/>}/>
        {/*<Route  path='/Category' element ={<CategoryPage/>}/>*/}
       
          </Routes>
      
    </div>
    )
  }
}

export default App;
