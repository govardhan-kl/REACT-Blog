import { useState } from "react";
import {db} from '../firebase';
import { collection, query ,getDocs , doc , onSnapshot, Query , addDoc, updateDoc, deleteDoc, where, orderBy } from "firebase/firestore";
import {useFormInputs} from "./hook";

//telling to scope a button css file to CreatePost componenet by using CSS MODULES
import classes from "./Button.module.css";

//styling dynamically
import styled, {css} from "styled-components";

const StyledButton = styled.button`
  height: 33px;
  background: ${(props)=>props.primary ? "blue" : "yellow"};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) => props.primary && css`
    border: 4px solid red;
  `}
`;


function CreatePost() {

  // const [title, setTitle] = useState();
  // const [content, setContent] = useState();
  // const [subtitle, setSubtitle] = useState();

  // instead of doing as above we can use custom hook as below
  const title = useFormInputs("");
  const content = useFormInputs("");
  const subtitle = useFormInputs("");

  //adding data to firestore
  async function handleSubmit(e){
    e.preventDefault();
    
    console.log(title.value);
    console.log(subtitle.value);
    console.log(content.value);

    const docRef = await addDoc(collection(db, "blogs"), {
      title: title.value,
      subtitle: subtitle.value,
      content : content.value,
      createAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);

    //resetting fields back to empty
    title.onChange("")
    subtitle.onChange("")
    content.onChange("")
  }


  return (
    <div className="create-post">
      <h1>Create Post/Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e)=>setTitle(e.target.value)} /> */}
          {/*  above is normal usestate and below is custom hook*/}
          <input {...title} />
        </div>
        <div className="form-field">
          <label> Sub Title</label>
          <input {...subtitle}/>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        {/* <button className="create-post-btn">Create Post</button> */}
        <button className={classes.createPostBtn}>Create Post</button>
      </form>
      <StyledButton primary>Create Post </StyledButton>
      <StyledButton>Create Post </StyledButton>
    </div>
  );
}

export default CreatePost;
  