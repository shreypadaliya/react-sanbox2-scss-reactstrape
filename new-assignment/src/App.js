import React, { useEffect } from 'react'
import Homepage from '../src/pages/homepage'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out',  
      once: true,  
    });
  }, []);

  return (
    <div>
      <Homepage/>
    </div>
  )
}


export default App
