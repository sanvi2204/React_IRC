import React from 'react'
import {Routes,Route} from 'react-router-dom';

import Users from './Pages/user';
import Adduser from './Pages/adduser';
import Edituser from './Pages/edituser';

const App = () => {
  return (
  <>
    <Routes>
    <Route path='/' element={<Users/>}/>
    <Route path='/add' element={<Adduser/>}/>
    <Route path='/edit' element={<Edituser/>}/>

    </Routes>
    </>
  )
}
export default App;
