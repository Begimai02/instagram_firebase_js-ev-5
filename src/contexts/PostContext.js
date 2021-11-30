import { createContext, useContext, useReducer, useEffect } from "react";
import { firestore } from "../firebase";
import {
  collection,
  doc,
  onSnapshot,
  query,
  addDoc,
  deleteDoc,
  serverTimestamp,
  orderBy,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const postContext = createContext();

export const usePosts = () => useContext(postContext);

const initialState = {
  posts: [],
  onePostForEdit: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_ONE_POST_FOR_EDIT":
      return {
        ...state,
        onePostForEdit: action.payload,
      };
    default:
      return state;
  }
};

const PostContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data(), "hello");
        arr.push({ docId: doc.id, ...doc.data() });
      });
      console.log(arr);
      dispatch({
        type: "GET_POSTS",
        payload: arr,
      });
    });
    return () => {
      unsubscribe();
    };
  }, [firestore]);

  const addPost = async (newPost) => {
    try {
      const docRef = await addDoc(collection(firestore, "posts"), {
        image: newPost.image,
        desc: newPost.desc,
        createdAt: serverTimestamp(),
      });
      console.log(docRef.id, "status 200: ok");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    await deleteDoc(doc(firestore, "posts", id));
  };

  // EDIT -----
  const getOnePostForEdit = async (id) => {
    const docRef = doc(firestore, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({
        type: "GET_ONE_POST_FOR_EDIT",
        payload: docSnap.data(),
      });
    } else {
      console.log("No such document!");
    }
  };

  const saveEditedPost = async (id, editedPost) => {
    const docRef = doc(firestore, "posts", id);
    try {
      await updateDoc(docRef, {
        image: editedPost.image,
        desc: editedPost.desc,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        onePostForEdit: state.onePostForEdit,
        addPost,
        deletePost,
        getOnePostForEdit,
        saveEditedPost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostContext;
