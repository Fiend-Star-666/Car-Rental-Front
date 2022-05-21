import React, { useEffect, useState } from 'react';
import '../css/loginStyle.css';
import login from '../video/login.mp4';


//public\video
//C:\Users\gurms\git\vehicleFront\vehicle-front\src\components\login.mp4
//src\components\Login.jsx

//C:\Users\gurms\git\vehicleFront\vehicle-front\public\video\login.mp4
export default function Login() {
  return (
    <div>
      <video autoPlay loop playsInline muted>
        <source
          src={login}
          typr = 'video/mp4'
        />
      </video>

      <header >
        <h1>
          Explore
          <span>Montana</span>
        </h1>
      </header>

      <main >
        
          
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum
        
      </main>

    </div>
  );
}
//index.dt.s