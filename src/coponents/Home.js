import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from '../firebase';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//using style componenets
import styled from "styled-components";

// this is now a COMPONENT
const SubTitle = styled.div`
  color:grey
`;

const Post = styled.div`
  border: 1px solid #e1e1e1;
  background:lightgrey;

  &:hover{
    border: 1px solid #2196f3;
  }

  p {
    color:red;
  }

  @media (max-width:800px){
    border-top: 1px solid black;
    p {
      color:yellow;
    }
  }
`;


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
      <SubTitle id="blog-by" >Govardhana</SubTitle>{/* STYLED COMPONENET WAY*/}

      {posts.map((post,index)=>(
        <Post className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p style={{fontStyle:"italic"}}>{post.subtitle}</p>{/* INLINE STYING*/}
        </Post>
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
  