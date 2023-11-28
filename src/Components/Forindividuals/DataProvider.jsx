import React ,{useState,createContext} from 'react'

import Logo from './Logo';
import Care from './Care';

const DataContext =createContext({});

export const DataProvider= () => {
  
  const[username,setUsername]=useState('');
  const[True,setTrue]=useState(false);
  const UserValue ={
    username,
    setUsername,
    setTrue
}
  return (
    <DataContext.Provider value={UserValue}>
        {True? <Care/>:<Logo/>}
    </DataContext.Provider>
  )
};

export default DataContext;