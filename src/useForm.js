import React, { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    paswword2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    c;
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
};
