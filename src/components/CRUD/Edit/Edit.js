import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../../contexts/PostContext";
import CrudForm from "../CrudForm/CrudForm";

const Edit = () => {
  const { getOnePostForEdit, onePostForEdit, saveEditedPost } = usePosts();
  const { editId } = useParams();

  useEffect(() => {
    getOnePostForEdit(editId);
  }, []);
  return (
    <>
      <CrudForm
        mainLabel="Edit post"
        btnText="Save"
        submitBtnColor="submit-edit"
        submitForm={saveEditedPost}
        initialValue={onePostForEdit}
        docId={editId}
      />
    </>
  );
};

export default Edit;
