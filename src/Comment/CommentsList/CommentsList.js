import React from 'react'
// import { Comment } from '../comment/comment';
import { AuthContext } from '../../AuthContex';
// import { Reply } from './reply';

const Commentslist = ({item}) => {
  const {onReply} = React.useContext(AuthContext);
  return (
    <>
    
    <div> 

    <h3>{item}</h3>
    <button onClick={()=>onReply()}>Reply</button>
    </div>

    <div>
    
    </div>
    </>
    
  )
}

export default Commentslist;