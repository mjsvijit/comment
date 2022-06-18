import React,{useState,useContext} from 'react'
import { AuthContext } from '../../AuthContex';
import styles from "./comments.module.css"

export const Comments = ({handleAdd}) => {
    
    const {isPresent} = useContext(AuthContext);
    const [item, setItem] = useState("");
    const [count,setCount]=useState(0);

    const handleChange=(e)=>{
             setItem(e.target.value)
    }

    const handlesubmit = () =>{
        setCount(count+1)
        handleAdd(item);
        setItem("")
    }


    return (
        <div> 
       
        {
            isPresent && ( 
    <div className='styles.maindiv'>
        
          <input id="styles.input"placeholder='Add a comment' value={item} onChange={handleChange}/>
          <br />
        
          <button id='styles.button' onClick={handlesubmit} > Add comment</button>
      
    </div>
            )}
            </div>
  )
}



