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
} from "firebase/firestore";

const postContext = createContext();

export const usePosts = () => useContext(postContext);

const initialState = {
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

const PostContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    await deleteDoc(doc(firestore, "posts", id));
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        addPost,
        deletePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostContext;
