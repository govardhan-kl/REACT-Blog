import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../firebase';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      const q = query(collection(db, "blogs"));
      const datas = onSnapshot(q,(querySS)=>{
      
        const posts = querySS.docs.map((data)=>{
            return {
              id:data.id,
              ...data.data()
            }
        })
        console.log(posts)
        setPosts(posts)
      })
  },[])

  return (
    <div className="home">
      <h1 style={styles.heading}>Tech Blogs</h1>{/* INLINE STYING*/}
      <div id="blog-by" >Govardhana</div>

      {posts.map((post,index)=>(
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p style={{fontStyle:"italic"}}>{post.subtitle}</p>{/* INLINE STYING*/}
        </div>
      ))}
    </div>
  );
}
  
export default Home;

//styles
// Inline styling, using below in html elemets
const styles = {
  heading:{
    marginTop:30,
    fontSize:50,
  },
}
  