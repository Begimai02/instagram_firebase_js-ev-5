import React, { useEffect, useState } from "react";
import "./CrudForm.css";

const CrudForm = ({
  mainLabel,
  submitForm,
  btnText,
  submitBtnColor,
  initialValue,
  docId,
}) => {
  const [form, setForm] = useState({ desc: "", image: "" });

  useEffect(() => {
    if (initialValue) {
      setForm(initialValue);
    }
  }, [initialValue]);

  const handleChange = (e) => {
    const obj = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(obj);
  };

  const handleSubmit = () => {
    if (docId) {
      submitForm(docId, form);
    } else {
      submitForm(form);
      setForm({ desc: "", image: "" });
    }
  };
  return (
    <div className="wrapper">
      <h2>{mainLabel}</h2>
      <label for="desc">
        <b>Description</b>
      </label>
      <input
        type="text"
        name="desc"
        placeholder="Description"
        value={form.desc}
        onChange={(e) => handleChange(e)}
        className="desc"
      />

      <label for="image">
        <b>Image</b>
      </label>
      <input
        type="text"
        name="image"
        placeholder="Image"
        value={form.image}
        onChange={(e) => handleChange(e)}
        className="image"
      />

      <button
        className={`submit ${submitBtnColor}`}
        onClick={() => handleSubmit()}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CrudForm;
