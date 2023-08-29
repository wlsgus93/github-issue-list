import React from 'react';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {Header,Card} from '../index.js'


const MainLayout = () =>{
//여기서 cards.map작성

    
    return <div>
        <h1>MainLayout</h1>
        <Header/>
        <Card/>
      </div>;
}

export default MainLayout;
