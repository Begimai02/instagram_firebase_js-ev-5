import React, { useState } from "react";
import { usePosts } from "../../../contexts/PostContext";

const Add = () => {
  const { addPost } = usePosts();
  const [form, setForm] = useState({ desc: "", image: "" });

  const handleChange = (e) => {
    const obj = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(obj);
  };

  const handleSubmit = () => {
    addPost(form);
    setForm({ desc: "", image: "" });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px auto",
        maxWidth: "500px",
      }}
    >
      <input
        type="text"
        name="desc"
        placeholder="Description"
        value={form.desc}
        onChange={(e) => handleChange(e)}
        style={{ marginBottom: "10px" }}
      />

      <input
        type="text"
        name="image"
        placeholder="Image"
        value={form.image}
        onChange={(e) => handleChange(e)}
        style={{ marginBottom: "10px" }}
      />

      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Add;
