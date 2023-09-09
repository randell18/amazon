import React, { useState } from 'react'
import AmazonHeader from './components/AmazonHeader'
import AmazonHome from './components/AmazonHome'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' 
import AmazonCheckout from './components/AmazonCheckout'

function App() {

  return (
    <Router>
      <div className='app'>
        <AmazonHeader />
        <Routes>
          <Route exact path='/' element={<AmazonHome/>}/>
          <Route path='/checkout' element={<AmazonCheckout/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
