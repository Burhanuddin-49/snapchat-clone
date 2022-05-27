import {
  CameraAlt,
  // ChatBubble,
  // RadioButtonUnchecked,
  Search,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import "./Chats.css";
import { selectUser } from "./features/appSlice";
import { resetCameraImage } from "./features/cameraSlice";
import { auth, db } from "./firebase";

function Chats() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const takeSnap = () => {
    dispatch(resetCameraImage());
    navigate("/");
  };

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar
          src={user.profilePic}
          onClick={() => auth.signOut()}
          className="chats__avatar"
        />
        <div className="chats__search">
          <Search className="chats__searchIcon" />
          <input placeholder="Friends" type="text" />
        </div>
        <CameraAlt className="chats__camera" onClick={takeSnap} />
        {/* <ChatBubble className="chats__chatsIcon" /> */}
      </div>
      <div className="chats__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
      {/* <RadioButtonUnchecked
        className="chats__takePicIcon"
        onClick={takeSnap}
        fontSize='large'
      /> */}
    </div>
  );
}

export default Chats;
