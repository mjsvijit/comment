import React,{useContext} from 'react';
import { Comment } from './Comment/comment/comment';
import { AuthContext } from './AuthContex';
import styles from './App.module.css'
import Giphy from './giphy/Giphy';

function App() {
  const {turnvalue} = useContext(AuthContext);
  return (
    
    <div className={styles.App}>
    <img id={styles.img1} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg" />

     <div className={styles.maindiv}> 

     
      <button onClick={()=>turnvalue()} >Comment</button>
     </div>
    
     <br />

      <Comment />
     <Giphy />
    </div>
  );
}

export default App;
