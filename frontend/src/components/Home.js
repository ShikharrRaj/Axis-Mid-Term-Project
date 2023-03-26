import React from 'react';
import img1 from  '../images/1.jpg'


function Home() {
  return (
    <div class="bg"
    style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
      height:"100vh"
    }}
    >
        
    </div>
  )
}

export default Home