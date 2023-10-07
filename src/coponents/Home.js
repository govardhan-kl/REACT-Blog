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
      <h1>Tech Bolgs</h1>
      <div id="blog-by">Aakash</div>

      {posts.map((post,index)=>(
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
  
export default Home;
  