import React from 'react'
import bgCode from './assets/codejpg.jpg';
import Navbar from './assets/components/Navbar/Navbar';
import Competences from './assets/components/Competences/Competences';

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Competences />
      </div>
    </div>
  )
}

export default App