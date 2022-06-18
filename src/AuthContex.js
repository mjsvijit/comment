import React,{useState} from 'react'
import { Comments } from './Comment/comments/comments';

export const AuthContext = React.createContext();


export const AuthContextProvider = ({children}) =>{ 
   
    const [isPresent,setIsPresent]=useState(false);
    const [isVisible,setIsVisible]=useState(false);

    const turnvalue=()=>{
        setIsPresent(true);
        setIsVisible(false);
    }

    const onReply=()=>{
           setIsPresent(false);
           setIsVisible(true);
    }
    
  
     return   <AuthContext.Provider value={{isPresent,isVisible,turnvalue,onReply}}>{children}</AuthContext.Provider>
         
     
 }
 
