import React,{useState,useContext} from 'react'
import { AuthContext } from '../AuthContex';

export const Reply = ({handleAdd}) => {
    
    const {isVisible} = useContext(AuthContext);
    const [sitem, setSItem] = useState("");
    
    const handleChange=(e)=>{
             setSItem(e.target.value)
    }

    const handlesubmit = () =>{
        handleAdd(sitem);
        setSItem("")
    }


    return (
        <div> 
        
        {
            isVisible && ( 
    <div >
        
          <input id="input"placeholder='Add a comment' value={sitem} onChange={handleChange}/>
          <br />
        
          <button id='button' onClick={handlesubmit} > Add comment</button>
      
    </div>
            )}
            </div>
  )
}