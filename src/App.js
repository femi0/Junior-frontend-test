import './App.css';
import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

//import HomePage from './pages/homepage/homepage.component';
import Womens from './pages/category/women.component';
import Mens from './pages/category/men.component';
import Sneakers from './pages/category/Sneakers.component';

import CheckOutPage from './pages/checkout/checkout.component';

import HeaderSection from './component/header/header.component';
import { connect } from 'react-redux';


export class App extends PureComponent {
  constructor(props){
      super(props);
      this.state ={
          hidden:null
      }
  }
  render(){
    return(
      <div>
        <HeaderSection />
        <Routes>
        <Route  exact path='/' element ={<Womens/>}/>
        <Route  exact path='/Men' element ={<Mens/>}/>
        <Route  exact path='/Sneakers' element ={<Sneakers/>}/>
        <Route  exact path='/Checkout' element ={<CheckOutPage/>}/>
        {/*<Route  path='/Category' element ={<CategoryPage/>}/>*/}
       
          </Routes>
      
    </div>
    )
  }
}



export default connect(null, )(App);
