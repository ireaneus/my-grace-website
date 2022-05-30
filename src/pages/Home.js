import React from 'react';
import GraceAppBar from '../components/Appbar';
import Sidebar from '../components/Sidebar';


const Home = () => {
  return (
    <div className='w3-auto w3-card-4' sx={{ backgroundColor: "white" }}>
      <GraceAppBar />
      <Sidebar />
    </div>
  )
}

export default Home