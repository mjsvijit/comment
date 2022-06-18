import React,{useEffect} from 'react'
import { Comments } from '../comments/comments';
import {v4 as uuid} from 'uuid'
import Commentslist from '../CommentsList/CommentsList';
import { Reply } from '../reply';

export const Comment = () => {

    const [list, setList] = React.useState([]);
    useEffect(() => {
        
           console.log(list)
        
    }, [list])


    const handleAdd = (item)=>{
    
        const payload={
            item,
            id:uuid()
        }
        setList([...list,payload]);
    }


  return (

    <div className='commentListMaindiv'>

    <Comments handleAdd={handleAdd}/>
    
         {
    
            list.map((ele) =>(
    
                <Commentslist item={ele.item} key={ele.id}/>
                
               
    
                ))
            }
     
    <Reply handleAdd={handleAdd} />

    </div>
  )
}
