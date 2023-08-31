import React, { useEffect } from 'react';
import {MainLayout} from '../components/Main/index.js'
const Main = () =>{

    useEffect(()=>{
        console.log('Main render')
    },[])
    return <MainLayout/>
}

export default Main;
