import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
//import HomePage from './pages/homepage/homepage.component';
import CategoryPage from './pages/category/category.component';


export class App extends PureComponent {
  render(){
    return(
      <div>
        <Routes>
        <Route  exact path='/' element ={<CategoryPage/>}/>
        {/*<Route  path='/Category' element ={<CategoryPage/>}/>*/}
       
          </Routes>
      
    </div>
    )
  }
}

export default App;
