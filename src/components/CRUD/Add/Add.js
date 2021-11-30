import React, { useState } from "react";
import { usePosts } from "../../../contexts/PostContext";
import CrudForm from "../CrudForm/CrudForm";

const Add = () => {
  const { addPost } = usePosts();

  return (
    <>
      <CrudForm
        mainLabel="Add post"
        btnText="Add"
        submitBtnColor="submit-add"
        submitForm={addPost}
        initialValue={null}
        docId={null}
      />
    </>
  );
};

export default Add;
