import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onSnapshot, doc } from "firebase/firestore";
import {db} from '../firebase';

function PostDetail() {

  const [post, setPost] = useState({})
  // fetching the params from the URL using react-dom
  const {postid} = useParams();

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "blogs", postid), (doc) => {
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", doc.data());
    setPost(doc.data());
    });
  },[])

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
    </div>
  );
}

export default PostDetail;
  